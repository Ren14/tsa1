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

	send : async function (req, res){
		sails.log('Send()');
		sails.log(req.body)
		// 10. Get your account
	    let from = req.body.from

	    // 11. Add your account to ContractKit to sign transactions
	    kit.addAccount(req.body.private_key)

	    // 12. Specify recipient Address
	    let to = req.body.to

	    // 13. Specify an amount to send
	    let amount = req.body.value

	    // 14. Get the Gold Token contract wrapper    
	    let goldtoken = await kit.contracts.getGoldToken()
	    sails.log("Camperiño")
	    // 15. Transfer gold from your account to anAddress
	    let tx = await goldtoken.transfer(to, amount).send({from: from})

	    // 16. Wait for the transaction to be processed
	    let receipt = await tx.waitReceipt()

	    // 17. Print receipt
	    console.log('Transaction receipt: %o', receipt)

	    // 18. Get your new balance
	    let balance = await goldtoken.balanceOf(from)

	    // 19. Print new balance
	    console.log(`Your new account balance: ${balance.toString()}`)



	    if(req.body.phone){
	    	var notificacion = `Your transaction was successfully sent ! The hash is ${receipt.transactionHash}. Greetings team Celo`;

		    // Notifico por whatsapp
		    await sails.helpers.enviarWhatsapp.with({
		    	texto: notificacion,
		    	numero: req.body.phone,
		    });

	    }

	    return res.json({
	    	status: 'ok',
	    	tx: receipt
	    })
	}

};

