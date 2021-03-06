/**
 * BfaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
const base64 = require('nodejs-base64-encode');
const url = sails.config.custom.urlRpcBfa;
const web3 = new Web3(url);
const accountAddress = sails.config.custom.accountAddressBfa;
const contractABI = sails.config.custom.contractABIBfa;
const contractAddress = sails.config.custom.contractAddressBfa;
const privateKey = Buffer.from(
  sails.config.custom.privateKeyBfa,
  'hex',
);
const contract = new web3.eth.Contract(contractABI, contractAddress);

module.exports = {
  
  verify : async function (req, res){  
	  	sails.log("Verify("+req.params.ots+", "+req.params.file_hash+")");
	  	const file_hash = req.params.file_hash;
	  	const base64_ots = req.params.ots;	  	

	  	// Transformo datos
	  	const aux_ots = base64.decode(base64_ots.toString(), 'base64');
	  	var array_ots = aux_ots.split('-');
	  	
	  	// OTS definitivo  	
	  	var permanent_ots;

		if(array_ots.length != 2){
	  		return res.json('El OTS enviado es inválido');
	  	}
	  	
	  	const ots = array_ots[0]; // Este es el  OpenTimeStamp (OTS) original creado en el método stamp() con el helper getOts(); Es un ID único para cada request.
	  	const tx_hash = array_ots[1]; // Hash de la TX obtenida de la blockchain

	  	// Antes de verificar el contenido del OTS y el HASH
	  	// Verifico el estado de la transacción
		var tx = await web3.eth.getTransaction(tx_hash, async (err, _tx) => {
	  		if(err){
				return res.json(err.toString());
			}
			
			// Significa que la TX aún no se incluye en un bloque.
			if(!_tx.blockNumber){
				return res.json({
					status : 'pending',
					tx_hash : tx_hash,					
					file_hash : file_hash,
					ots : ots,
					msg : 'La Transacción aún no es incluida en un Bloque. Intente nuevamente en unos minutos.'
				});			
			}

			// Verifico si el OTS + File_Hash enviado son válidos
			const result_verify = await sails.helpers.verifyHash(ots, file_hash, url, accountAddress, contractABI, contractAddress, privateKey);

			
			if(result_verify){

				const block_number = await sails.helpers.getBlockNumber(ots, url, contractABI, contractAddress);

				// Tengo que obtener el bloque entero, para sacar su timestamp
				const block = await sails.helpers.getBlock(block_number, url);
				
				return res.json({
					status : 'success',
					tx_hash : tx_hash,
					block_number : block_number,
					file_hash : file_hash,
					ots : ots,
					contract_address: contractAddress,
					timestamp : block.timestamp,
					block_hash : block.hash
				});
			} else {
							
				var file_hash_by_ots = await sails.helpers.getHash(ots, accountAddress, contractAddress);
				
				return res.json({
					status : 'fail',
					file_hash_by_ots : file_hash_by_ots,
					file_hash_send : file_hash,
					tx_hash : tx_hash,					
					ots : ots,
					msg : 'El HASH del archivo enviado no se corresponde con el OTS.'
				});	 
				
				
			}
			
	  	});
  	
  },

  stamp : async function (req, res){
  		sails.log("Stamp("+req.body.file_hash+")");
	  	const file_hash = req.body.file_hash;
	  	// A partir del Hash recibido, genero el OpenTimeStamp (OTS)
	  	const ots = await sails.helpers.getOts(file_hash, accountAddress, contractAddress);
	  	var comprobante_ots;

	  	web3.eth.getTransactionCount(accountAddress, (err, txCount) => {

			const data = contract.methods.stamp(ots, file_hash).encodeABI();

			// Construir la transaccion
			const txObject = {
				nonce: web3.utils.toHex(txCount),
				to: contractAddress,		
				gas: 2000000,
				// TODO: revisar que el precio sea automático
				//gasPrice: web3.utils.toHex(web3.utils.toWei('1000', 'gwei')),
				data: data
			}

			// Firmar la transaccion
			const tx = new Tx(txObject);
			tx.sign(privateKey);

			const serializeTransaction = tx.serialize();
			const raw = '0x' + serializeTransaction.toString('hex');

			// Transmitir la transacción
			web3.eth.sendSignedTransaction(raw, (err, tx_hash) => {
				
				if(err){					
					return res.json(err.toString());
				}

				comprobante_ots = ots + '-' + tx_hash;

				// Si está todo bien, retorno el OpenTimeStamp definitivo para luego comprobar si el hash del archivo junto con este comprobante son válidos
				comprobante_ots = base64.encode(comprobante_ots.toString(), 'base64');

				return res.json({
					comprobante_ots : comprobante_ots,
					tx_hash : tx_hash
				});
			});
		});
	  
  },
};

