var base64_encode = require('./utilities').base64_encode;

/**
 * Methods for accessing Account Management API endpoints.
 */
var AccountManagement = {

  /**
   * Create a new print job.
   */
  createChildAccount: function (options) {
    if( !options.firstName ) {
      throw new Error('Must specify "firstName" for a Child Account: { firstName: "Test", ... }');
    }

    if( !options.lastName ) {
      throw new Error('Must specify "lastName" for a Child Account: { lastName: "Test", ... }');
    }

    if( !options.email ) {
      throw new Error('Must specify "email" for a Child Account: { email: "test@test.com", ... }');
    }

    if( !options.password ) {
      throw new Error('Must specify "password" for a Child Account: { password: "12345", ... }');
    }

    return this._postJSON('account', {Account: options});
  }
};

module.exports = AccountManagement;
