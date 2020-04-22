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


  friendlyName: 'Verify hash',


  description: '',


  inputs: {
    ots : {
      type: 'string',
      require: true,
    },

    file_hash : {
      type : 'string',
      require : true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    
    var result = await contract.methods.verify(inputs.ots,inputs.file_hash).call({from: accountAddress}, (err, result) => {
      if(err){
        return err.toString();
      }      
      return result;
    });

    return result;
  }


};

