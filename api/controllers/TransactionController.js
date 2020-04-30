/**
 * TransactionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const Web3 = require('web3');
 const Tx = require('ethereumjs-tx');
 const url = sails.config.custom.urlRpcRopsten;
 const web3 = new Web3(url);
 const accountAddressRopsten = sails.config.custom.accountAddressRopsten;
 const contractABIRopsten = sails.config.custom.contractABIRopsten;
 const contractAddressRopsten = sails.config.custom.contractAddressRopsten;
 const privateKeyRopsten = Buffer.from(
  sails.config.custom.privateKeyRopsten,
  'hex',
  );
 const contract = new web3.eth.Contract(contractABIRopsten, contractAddressRopsten);

 module.exports = {

  send: async function(req, res){
  	var _from = req.body.from;
  	var _to = req.body.to;
  	var _ether = req.body.ether;

  	web3.eth.sendTransaction({ from: _from, to: _to, value: web3.utils.toWei(_ether, 'ether')}, (err, txHash) => {
      if(err){
       return res.json(err.toString());
     }

     return res.json(txHash);
   });
  },

  

};

