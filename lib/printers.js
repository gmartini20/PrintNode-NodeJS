var _ = require('lodash');

/** @mixin Printers */
var Printers = {

  /**
   * Retrieves an array of computers associated with this client / account.
   */
  fetchPrinters: function (headers) {
    return this._getJSON('printers', headers);
  },

  /**
   * Retrieves the printer for the specified id.
   */
  fetchPrinter: function (printer_id, headers) {
    return this._getJSON('printers/' + printer_id, headers);
  },

  /**
   * Retrieves all printers for a single computer.
   */
  fetchPrintersForComputer: function (computer_id, headers) {
    return this._getJSON('computers/' + computer_id + '/printers', headers);
  },

  /**
   * Retrieves a single printer from the specified computer.
   */
  fetchPrinterForComputer: function (computer_id, printer_id, headers) {
    return this._getJSON('computers/' + computer_id + '/printers/' + printer_id, headers);
  }
};

module.exports = Printers;
