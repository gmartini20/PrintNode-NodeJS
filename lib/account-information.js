/** @mixin Account */
var Account = {

  /** Fetch metadata about PrintNode account */
  whoami: function (headers) {
    return this._getJSON('whoami', headers);
  },

  /** Fetch print credits available to PrintNode account */
  credits: function (headers) {
    return this._getJSON('credits', headers);
  }

};

module.exports = Account;
