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
    // TODO: 
    //- Almacenar el valor obtenido en la BD
    //- Calcular el tiempo de la última actualización
    //- Si es más de una hs, actualizar, si no leer y devolver el valor de la BD

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
      var etherToUsd = inputs.eth * exchangerate;
    } else {
      exchangerate = 190.8182377954368; // Camperiño
      sails.log("***** Tasa de conversion ETH/USD:", exchangerate);    
      var etherToUsd = inputs.eth * exchangerate;
    }
        
    return etherToUsd;
  }


};

