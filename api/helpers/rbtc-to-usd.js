const axios = require('axios');

module.exports = {


  friendlyName: 'Rbtc to usd',


  description: '',


  inputs: {
    rbtc : {
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

    if(exchangerate){
      sails.log("Tasa de conversion RBTC/USD:", exchangerate);    
      var rbtcToUsd = inputs.rbtc * exchangerate;
    } else {
      exchangerate = 8869.059502279988; // Camperiño
      sails.log("***** Tasa de conversion RBTC/USD:", exchangerate);    
      var rbtcToUsd = inputs.rbtc * exchangerate;
    }
    
    return rbtcToUsd;
  }


};

