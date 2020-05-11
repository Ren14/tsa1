const axios = require('axios');

module.exports = {


  friendlyName: 'Eth to usd',


  description: '',


  inputs: {
    eth : {
      type : 'number',
      required : true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    var exchangerate = await axios({        
      method : 'GET',
      url : 'https://rest.coinapi.io/v1/exchangerate/ETH/USD',
      headers: {
          'X-CoinAPI-Key' : sails.config.custom.xCoinApiKey, 
      },
    })
    .then((result) => {           
      return result.data.rate;
    })
    .catch(err => {
       console.log(err.response.data);
    });
        
    sails.log("Tasa de conversion ETH/USD:", exchangerate);
    
    var etherToUsd = exchangerate * inputs.eth;

    return etherToUsd;
  }


};

