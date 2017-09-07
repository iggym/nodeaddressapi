'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AddressSchema = new Schema({
  name: {
    type: String,
    required: ' enter  name'
  },
  email: {
    type: String,
    required: ' enter  email'
  },
  phone: {
    type: String,
    required: ' enter  phone'
  },
});

module.exports = mongoose.model('Address', AddressSchema);
