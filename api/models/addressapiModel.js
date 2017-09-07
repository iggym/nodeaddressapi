'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AddressSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  email: {
    type: String,
    required: 'Kindly enter the email'
  },
  phone: {
    type: String,
    required: 'Kindly enter the phone'
  },
});

module.exports = mongoose.model('Addresses', AddressSchema);
