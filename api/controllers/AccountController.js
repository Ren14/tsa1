/**
 * AccountController
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
  },

  // Son las blockchain con las que trabajamos desde la API REST
  getPayments : async function(req, res){
    var payments = [];

    payments.push({name: 'ropsten', enabled: true});
    payments.push({name: 'rinkeby', enabled: true});
    payments.push({name: 'rsk', enabled: true});
    payments.push({name: 'bfa', enabled: false});
    payments.push({name: 'celo', enabled: true});

    return res.json(payments);
  }

};

