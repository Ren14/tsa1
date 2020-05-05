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
  'GET /blockchain/verify/:ots/:file_hash' : 'BlockchainController.verify',
  'GET /account/create' : 'AccountController.create',
  'GET /account/get_balance/:account' : 'AccountController.getBalance',

  'GET /rinkeby/verify/:ots/:file_hash' : 'RinkebyController.verify',
  'GET /rinkeby/createAccount' : 'RinkebyController.createAccount',
  'GET /rinkeby/get_balance/:account' : 'RinkebyController.getBalance',

  'GET /bfa/verify/:ots/:file_hash' : 'BfaController.verify',
  'GET /bfa/createAccount' : 'BfaController.createAccount',
  'GET /bfa/get_balance/:account' : 'BfaController.getBalance',

  'GET /rsk/verify/:ots/:file_hash' : 'RskController.verify',
  'GET /rsk/createAccount' : 'RskController.createAccount',
  'GET /rsk/get_balance/:account' : 'RskController.getBalance',


  'POST /transaction/send' : 'TransactionController.send',
  'POST /blockchain/stamp' : 'BlockchainController.stamp',
  'POST /rinkeby/stamp' : 'RinkebyController.stamp',
  'POST /bfa/stamp' : 'BfaController.stamp',
  'POST /rsk/stamp' : 'RskController.stamp',


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
