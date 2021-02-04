/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  //////////////////////////////////////
  /////////// GET   ////////////////////
  //////////////////////////////////////

  // Metodos de ROPSTEN
  'GET /ropsten/verify/:ots/:file_hash' : 'BlockchainController.verify',
  'GET /ropsten/create_account' : 'BlockchainController.createAccount',
  'GET /ropsten/get_balance/:account' : 'BlockchainController.getBalance',
  
  // Metodos de RINKEBY
  'GET /rinkeby/verify/:ots/:file_hash' : 'RinkebyController.verify',
  'GET /rinkeby/create_account' : 'RinkebyController.createAccount',
  'GET /rinkeby/get_balance/:account' : 'RinkebyController.getBalance',  

  // Metodos de BFA
  'GET /bfa/verify/:ots/:file_hash' : 'BfaController.verify',
  'GET /bfa/create_account' : 'BfaController.createAccount',
  'GET /bfa/get_balance/:account' : 'BfaController.getBalance',

  // Metodos de RSK
  'GET /rsk/verify/:ots/:file_hash' : 'RskController.verify',
  'GET /rsk/create_account' : 'RskController.createAccount',
  'GET /rsk/get_balance/:account' : 'RskController.getBalance',  

  // Metodos de Celo
  //'GET /rsk/verify/:ots/:file_hash' : 'RskController.verify',
  'GET /celo/create_account' : 'CeloController.createAccount',
  'GET /celo/get_balance/:account' : 'CeloController.getBalance',  

  // METODOS VARIOS
  'GET /accounts/get_payments' : 'AccountController.getPayments',

  //////////////////////////////////////
  ///////////  POST ////////////////////
  //////////////////////////////////////
  
  'POST /ropsten/stamp' : 'BlockchainController.stamp',
  'POST /ropsten/send' : 'BlockchainController.send',

  'POST /rinkeby/stamp' : 'RinkebyController.stamp',
  'POST /rinkeby/send' : 'RinkebyController.send',
  
  'POST /rsk/stamp' : 'RskController.stamp',
  'POST /rsk/send' : 'RskController.send',
  
  'POST /bfa/stamp' : 'BfaController.stamp',
  'POST /bfa/send' : 'BfaController.send',

  'POST /celo/send' : 'CeloController.send',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
