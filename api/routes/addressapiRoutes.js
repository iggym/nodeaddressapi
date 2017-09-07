'use strict';
module.exports = function(app) {
  var addressapi = require('../controllers/addressapiController');

  // address Routes
  app.route('/addresses')
    .get(addressapi.list_all_address)
    .post(addressapi.create_an_address);


  app.route('/addresses/:addressId')
    .get(addressapi.read_an_address)
    .put(addressapi.update_an_address)
    .delete(addressapi.delete_an_address);
};
