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

    if(exchangerate){
      sails.log("Tasa de conversion RBTC/USD:", exchangerate);    
      var usdToRbtc = inputs.usd / exchangerate;
    } else {
      exchangerate = 8869.059502279988; // Camperiño
      sails.log("***** Tasa de conversion RBTC/USD:", exchangerate);    
      var usdToRbtc = inputs.usd / exchangerate;
    }
    
    return usdToRbtc;
  }


};

