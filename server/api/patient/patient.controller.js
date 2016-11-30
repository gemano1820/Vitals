'use strict';

var _ = require('lodash');
var Patient = require('./patient.model');

// Get list of patients
exports.index = function(req, res) {
  Patient.find(function (err, patients) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(patients);
  });
};

// Get a single patient
exports.show = function(req, res) {
  Patient.findById(req.params.id, function (err, patient) {
    if(err) { return handleError(res, err); }
    if(!patient) { return res.status(404).send('Not Found'); }
    return res.json(patient);
  });
};

// Creates a new patient in the DB.
exports.create = function(req, res) {
  Patient.create(req.body, function(err, patient) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(patient);
  });
};

// Updates an existing patient in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Patient.findById(req.params.id, function (err, patient) {
    if (err) { return handleError(res, err); }
    if(!patient) { return res.status(404).send('Not Found'); }
    var updated = _.merge(patient, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(patient);
    });
  });
};

// Deletes a patient from the DB.
exports.destroy = function(req, res) {
  Patient.findById(req.params.id, function (err, patient) {
    if(err) { return handleError(res, err); }
    if(!patient) { return res.status(404).send('Not Found'); }
    patient.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}