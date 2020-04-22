/**
 * AccountController
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
  create : async function (req, res){
  	var account_data = web3.eth.accounts.create();
  	return res.json(account_data);
  },

  getBalance : async function (req, res){
  	var account = req.params.account;

  	web3.eth.getBalance(account, (err, bal) => {
  		if(err){
  			return res.json(err.toString());
  		}
  		var balanceToEther = web3.utils.fromWei(bal, 'ether')
  		return res.json(balanceToEther);
  		
  	});
  }

};

