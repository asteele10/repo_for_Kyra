/**
 * Created by carnesen on 11/23/15.
 */
var accountBalance = {};
var random = require('./random');
var convert = require('./convert');

accountBalance.combine = function() {
  var balance = random(100, 1000000);
  convert(balance);
  return convert(balance);
};

accountBalance.string = function() {
  return 'Account balance: \n';
};

module.exports = accountBalance;