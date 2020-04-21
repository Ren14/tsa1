/**
 * BlockchainController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
const url = sails.config.custom.urlRpc;
const web3 = new Web3(url);
const accountAddress = sails.config.custom.accountAddress;
const contractABI = sails.config.custom.contractABI;
const contractAddress = sails.config.custom.contractAddress;
const privateKey = Buffer.from(
  sails.config.custom.privateKey,
  'hex',
);
const contract = new web3.eth.Contract(contractABI, contractAddress);

module.exports = {
  
  verify : async function (req, res){  	

	contract.methods.verify(req.params.ots,req.params.file_hash).call({from: accountAddress}, (err, result) => {
		if(err){
			return res.json(err)
		}

		return res.json(result);
	});
  	
  },

  stamp : async function (req, res){
  	var _ots = req.body.ots;
  	var _file_hash = req.body.file_hash;

  	// TODO: antes de stampar el hash recibido, verificar si ya fue estampado anteriormente

  	web3.eth.getTransactionCount(accountAddress, (err, txCount) => {

		const data = contract.methods.stamp(_ots, _file_hash).encodeABI();

		// Construir la transaccion
		const txObject = {
			nonce: web3.utils.toHex(txCount),
			to: contractAddress,		
			gasLimit: web3.utils.toHex(800000),
			gasPrice: web3.utils.toHex(web3.utils.toWei('2000', 'gwei')),
			data: data
		}

		// Firmar la transaccion
		const tx = new Tx(txObject);
		tx.sign(privateKey);

		const serializeTransaction = tx.serialize();
		const raw = '0x' + serializeTransaction.toString('hex');

		// Transmitir la transacción
		web3.eth.sendSignedTransaction(raw, (err, txHash) => {
			if(err){
				return res.json(err);
			}

			return res.json(txHash);
		});
	});
  },

  getBlockNumber : async function (req, res){
  	var _ots = req.params.ots;

  	contract.methods.getBlockNumber(_ots).call((err, result) => {
  		if(err){
			return res.json(err);
		}

		return res.json(result);
  	});
  },

  getHash : async function (req, res){
  	var _ots = req.params.ots;

  	contract.methods.getHash(_ots).call((err, result) => {
  		if(err){
			return res.json(err);
		}

		return res.json(result);
  	});
  },

  createAccount : async function (req, res){
  	var account_data = web3.eth.accounts.create();
  	return res.json(account_data);
  },

  sendTransaction: async function(req, res){
  	var _from = req.body.from;
  	var _to = req.body.to;
  	var _ether = req.body.ether;

  	web3.eth.sendTransaction({ from: _from, to: _to, value: web3.utils.toWei(_ether, 'ether')}, (err, txHash) => {
		if(err){
			return res.json(err);
		}

		return res.json(txHash);
	});
  }

};

