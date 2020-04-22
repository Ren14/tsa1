const sha256 = require('js-sha256');

module.exports = {


  friendlyName: 'Get ots',


  description: '',


  inputs: {
    file_hash : {
      type : 'string',
      required : true
    }
  },


  exits: {

    success: {
      outputFriendlyName: 'Ots',
    },

  },


  fn: async function (inputs) {

    var ots;
    const file_hash = inputs.file_hash;
    const accountAddress = sails.config.custom.accountAddress;
    const contractAddress = sails.config.custom.contractAddress;
    const now = new Date();
    const timeStamp = now.getTime();
    

    var hash = sha256.create();
    hash.update(file_hash.toString() + accountAddress.toString() + contractAddress.toString() + timeStamp.toString());
    ots = hash.hex();
    
    return ots;

  }


};

