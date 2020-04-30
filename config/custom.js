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

  //Datos para Ropsten 
  urlRpcRopsten: 'https://ropsten.infura.io/v3/a59f70f1e62e4db4babb69284e37672f',
  accountAddressRopsten : '0x59060CF376DeB6729da45C729EbecC171C2c16b9',
  contractABIRopsten : [{"constant":true,"inputs":[{"name":"ots","type":"string"}],"name":"getHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ots","type":"string"}],"name":"getBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ots","type":"string"},{"name":"file_hash","type":"string"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"selfDestroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ots","type":"string"},{"name":"file_hash","type":"string"}],"name":"stamp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"hash","type":"string"},{"indexed":true,"name":"ots","type":"string"}],"name":"Stamped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"Deploy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"SelfDestroy","type":"event"}],
  contractAddressRopsten: '0x96a716f91da961639f685100b12d13ef30ba89dc',
  privateKeyRopsten: 'D51E9F04E45381E1CC3C450CB296E73BBD0BDFCA7EE22FF2533D71631B9F536C',  
  

  //Datos para Rinkeby
  urlRpcRinkeby: 'https://rinkeby.infura.io/v3/8ac5540878e1481b81c84362c03b8d49',
  accountAddressRinkeby : '0xFA2BE13EcF2774e574Dfb640b3510ffe2Fe0C131',
  contractABIRinkeby : [{"constant":true,"inputs":[{"name":"ots","type":"string"}],"name":"getHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ots","type":"string"}],"name":"getBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ots","type":"string"},{"name":"file_hash","type":"string"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"selfDestroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ots","type":"string"},{"name":"file_hash","type":"string"}],"name":"stamp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"hash","type":"string"},{"indexed":true,"name":"ots","type":"string"}],"name":"Stamped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"Deploy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"}],"name":"SelfDestroy","type":"event"}],
  contractAddressRinkeby: '0xffD8331172E17227B553F91eA98142d9a5739bb8',
  privateKeyRinkeby: 'cea30502b47213f5076ea716c9dc3df078056439b9498b9904f2183cabedf3fd',


  /* Datos para localhost
  urlRpc_: 'http://localhost:8545',
  accountAddress_ : '0xDBF0C927F9E92dFE7C31e045e0Ba1067Ee205f73',
  contractABI_ : [{"constant":true,"inputs":[{"name":"ots","type":"string"}],"name":"getHash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ots","type":"string"}],"name":"getBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ots","type":"string"},{"name":"file_hash","type":"string"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"selfDestroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ots","type":"string"},{"name":"file_hash","type":"string"}],"name":"stamp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"accountAddress"},{"indexed":true,"name":"hash","type":"string"},{"indexed":true,"name":"ots","type":"string"}],"name":"Stamped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"accountAddress"}],"name":"Deploy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"accountAddress"}],"name":"SelfDestroy","type":"event"}],
  contractAddress_ : '0xBD89a34041190439d43ec391486819eF5CBfBDBe',
  privateKey_ : '6671485e4250881473c639465464148b5a0285461f136b585623333f22f7ca3f', 
  */
};
