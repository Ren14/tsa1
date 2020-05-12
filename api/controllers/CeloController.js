/**
 * CeloController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const ContractKit = require('@celo/contractkit');
const kit = ContractKit.newKit(sails.config.custom.urlRpcCelo);
const Web3 = require('web3');
var web3 = new Web3();

module.exports = {
	
	createAccount : async function (req, res){
		sails.log("createAccount()");
		var account_data = web3.eth.accounts.create();
		return res.json(account_data);
	},

	getBalance : async function (req, res){
		var account = req.params.account;

		let goldtoken = await kit.contracts.getGoldToken()

		let balance = await goldtoken.balanceOf(account)
		
		sails.log("-------------------------------------------------------");
		return res.json(balance);
	},

};

