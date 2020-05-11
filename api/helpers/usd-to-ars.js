const axios = require('axios');

module.exports = {


  friendlyName: 'Usd to ars',


  description: '',


  inputs: {
    usd : {
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

    sails.log("Tasa de conversión USD/ARS:", openexchange);

    // TODO: guardar el último valor en la BD y en caso de fallar el exchange, tomar la cotización de la BD

    var usdToArs = openexchange * inputs.usd;

    return usdToArs;
  }


};

