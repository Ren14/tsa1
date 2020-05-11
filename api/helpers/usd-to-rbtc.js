const axios = require('axios');

module.exports = {


  friendlyName: 'Usd to rbtc',


  description: '',


  inputs: {
    usd : {
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
      url : 'https://rest.coinapi.io/v1/exchangerate/RBTC/USD',
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
    
    var rbtcToUsd = inputs.usd / exchangerate;

    return rbtcToUsd;
  }


};

