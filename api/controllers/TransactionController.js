/**
 * TransactionController
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

