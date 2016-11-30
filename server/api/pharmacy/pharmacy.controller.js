'use strict';

var _ = require('lodash');
var Pharmacy = require('./pharmacy.model');

// Get list of pharmacys
exports.index = function(req, res) {
  Pharmacy.find(function (err, pharmacys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(pharmacys);
  });
};

// Get a single pharmacy
exports.show = function(req, res) {
  Pharmacy.findById(req.params.id, function (err, pharmacy) {
    if(err) { return handleError(res, err); }
    if(!pharmacy) { return res.status(404).send('Not Found'); }
    return res.json(pharmacy);
  });
};

// Creates a new pharmacy in the DB.
exports.create = function(req, res) {
  Pharmacy.create(req.body, function(err, pharmacy) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(pharmacy);
  });
};

// Updates an existing pharmacy in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pharmacy.findById(req.params.id, function (err, pharmacy) {
    if (err) { return handleError(res, err); }
    if(!pharmacy) { return res.status(404).send('Not Found'); }
    var updated = _.merge(pharmacy, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(pharmacy);
    });
  });
};

// Deletes a pharmacy from the DB.
exports.destroy = function(req, res) {
  Pharmacy.findById(req.params.id, function (err, pharmacy) {
    if(err) { return handleError(res, err); }
    if(!pharmacy) { return res.status(404).send('Not Found'); }
    pharmacy.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}