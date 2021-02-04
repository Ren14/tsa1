const axios = require('axios');

module.exports = {


  friendlyName: 'Usd to eth',


  description: '',


  inputs: {
    usd : {
      type : 'number',
      required : true,
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

    if(exchangerate){
      sails.log("Tasa de conversion ETH/USD:", exchangerate);    
      var usdToEth = inputs.usd / exchangerate;
    } else {
      exchangerate = 190.8182377954368; // Camperiño
      sails.log("***** Tasa de conversion ETH/USD:", exchangerate);    
      var usdToEth = inputs.usd / exchangerate;
    }
        

    return usdToEth;
  }


};

