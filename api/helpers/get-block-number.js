const Web3 = require('web3');
const url = sails.config.custom.urlRpc;
const web3 = new Web3(url);
const contractABI = sails.config.custom.contractABI;
const contractAddress = sails.config.custom.contractAddress;
const contract = new web3.eth.Contract(contractABI, contractAddress);

module.exports = {


  friendlyName: 'Get block number',


  description: '',


  inputs: {
    ots : {
      type: 'string',
      require: true,
    },
  },


  exits: {

    success: {
      outputFriendlyName: 'Block number',
    },

  },


  fn: async function (inputs) {
    
    var result = await contract.methods.getBlockNumber(inputs.ots).call((err, result) => {
      if(err){
        return err.toString();
      }

      return result;
    });

    return result;

  }


};

