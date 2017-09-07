'use strict';

var mongoose = require('mongoose'),
  Address = mongoose.model('Address');

exports.list_all_address = function(req, res) {
  Address.find({}, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.create_an_address = function(req, res) {
  var new_address = new Address(req.body);
  new_address.save(function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.read_an_address = function(req, res) {
  Address.findById(req.params.addressId, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.update_an_address = function(req, res) {
  Address.findOneAndUpdate({_id: req.params.addressId}, req.body, {new: true}, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.delete_an_address = function(req, res) {


  Address.remove({
    _id: req.params.addressId
  }, function(err, address) {
    if (err)
      res.send(err);
    res.json({ message: 'Address successfully deleted' });
  });
};
