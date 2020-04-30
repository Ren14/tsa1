const Web3 = require('web3');

module.exports = {


  friendlyName: 'Get block',


  description: '',


  inputs: {
    block_number : {
      type: 'number',
      require: true,
    },
    url : {
      type : 'string',
      require : true,
    },
  },


  exits: {

    success: {
      outputFriendlyName: 'Block',
    },

  },


  fn: async function (inputs) {

    const url = inputs.url;
    const web3 = new Web3(url);

    var result = await web3.eth.getBlock(inputs.block_number, (err, result) => {
      if(err){
        return err.toString();
      }

      return result;
    });

    return result;

  }


};

