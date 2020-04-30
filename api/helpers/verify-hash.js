const Web3 = require('web3');

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
    },
    url : {
      type : 'string',
      require : true,
    },
    accountAddress : {
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
    privateKey : {
      type : 'ref',
      require : true,
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    const url = inputs.url;
    const web3 = new Web3(url);
    const accountAddress = inputs.accountAddress;
    const contractABI = inputs.contractABI;
    const contractAddress = inputs.contractAddress;
    const privateKey = Buffer.from(
      inputs.privateKey,
      'hex',
    );
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    
    var result = await contract.methods.verify(inputs.ots,inputs.file_hash).call({from: accountAddress}, (err, result) => {
      if(err){
        return err.toString();
      }      
      return result;
    });

    return result;
  }


};

