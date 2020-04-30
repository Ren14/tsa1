const Web3 = require('web3');

module.exports = {


  friendlyName: 'Get block number',


  description: '',


  inputs: {
    ots : {
      type: 'string',
      require: true,
    },
    url : {
      type : 'string',
      require : true,
    },    
    contractABI : {
      type : 'ref',
      require : true,
    },
    contractAddress : {
      type : 'string',
      require : true,
    },
  },


  exits: {

    success: {
      outputFriendlyName: 'Block number',
    },

  },


  fn: async function (inputs) {
    const url = inputs.url;
    const web3 = new Web3(url);    
    const contractABI = inputs.contractABI;
    const contractAddress = inputs.contractAddress;    
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    
    var result = await contract.methods.getBlockNumber(inputs.ots).call((err, result) => {
      if(err){
        return err.toString();
      }

      return result;
    });

    return result;

  }


};

