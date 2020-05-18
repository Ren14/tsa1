const axios = require('axios');
const querystring = require('querystring'); // Luego modificar envíos por POST 
const util = require('util');  

module.exports = {


  friendlyName: 'Enviar whatsapp',


  description: '',


  inputs: {
    texto: {
      type: 'string',
      require : true
    },

    numero: {
      type: 'string',
      require: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    var data = querystring.stringify({
      texto : inputs.texto,
      telefono : inputs.numero
    });

    const response = await axios.get('http://190.105.227.247/~umbot/api-whatsapp/?'+data)
    .then((response) => {  
      sails.log(response);
      return response;
    })
    .catch((err) => {      
      return {
        status : 201,
        statusText : String(err.message),        
      }  
    });


    // Respuesta
    if(response.status == 200 && response.statusText == 'OK'){
            
      sails.log.info(
        'Send whatsapp complete: \n'+
        util.inspect(inputs,{depth:null})
      );
      return {
        status : 'ok',        
      };
    } else {
      sails.log.info(
        'Send whatsapp incomplete: \n'+
        util.inspect(inputs,{depth:null})
      );
      return {
        status : 'fail'
      };
    }
  }


};

