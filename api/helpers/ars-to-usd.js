const axios = require('axios');

module.exports = {


  friendlyName: 'Ars to usd',


  description: '',


  inputs: {
    ars : {
      type : 'number',
      required : true
    },    
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    var openexchange = await axios({        
      method : 'GET',
      url : `https://openexchangerates.org/api/latest.json?app_id=${sails.config.custom.openExchangeRatesAppId}&symbols=ARS`,      
    })
    .then((result) => {           
      return result.data.rates.ARS;
    })
    .catch(err => {
      console.log(err);
    });

    if(openexchange){
      sails.log("Tasa de conversión USD/ARS:", openexchange);
      var arsToUsd = inputs.ars / openexchange;
    } else {
      openexchange = 67.4556; // Camperiño
      sails.log("********Tasa  de conversión USD/ARS:", openexchange);
      var arsToUsd = inputs.ars / openexchange;
    }

    return arsToUsd;
  }


};

