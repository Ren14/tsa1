/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  urlRpc: 'http://localhost:8545',
  accountAddress : '0xDBF0C927F9E92dFE7C31e045e0Ba1067Ee205f73',
  contractABI : [{"constant":true,"inputs":[{"name":"ots","type":"string"}],"name":"getHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ots","type":"string"}],"name":"getBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ots","type":"string"},{"name":"file_hash","type":"string"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"selfDestroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ots","type":"string"},{"name":"file_hash","type":"string"}],"name":"stamp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"accountAddress"},{"indexed":true,"name":"hash","type":"string"},{"indexed":true,"name":"ots","type":"string"}],"name":"Stamped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"accountAddress"}],"name":"Deploy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"accountAddress"}],"name":"SelfDestroy","type":"event"}],
  contractAddress: '0xBD89a34041190439d43ec391486819eF5CBfBDBe',
  privateKey: '6671485e4250881473c639465464148b5a0285461f136b585623333f22f7ca3f',  

};
