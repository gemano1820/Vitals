'use strict';

var _ = require('lodash');
var Appointment = require('./appointment.model');

// Get list of appointments
exports.index = function(req, res) {
  Appointment.find(function (err, appointments) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(appointments);
  });
};

// Get a single appointment
exports.show = function(req, res) {
  Appointment.findById(req.params.id, function (err, appointment) {
    if(err) { return handleError(res, err); }
    if(!appointment) { return res.status(404).send('Not Found'); }
    return res.json(appointment);
  });
};

// Creates a new appointment in the DB.
exports.create = function(req, res) {
  Appointment.create(req.body, function(err, appointment) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(appointment);
  });
};

// Updates an existing appointment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Appointment.findById(req.params.id, function (err, appointment) {
    if (err) { return handleError(res, err); }
    if(!appointment) { return res.status(404).send('Not Found'); }
    var updated = _.merge(appointment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(appointment);
    });
  });
};

// Deletes a appointment from the DB.
exports.destroy = function(req, res) {
  Appointment.findById(req.params.id, function (err, appointment) {
    if(err) { return handleError(res, err); }
    if(!appointment) { return res.status(404).send('Not Found'); }
    appointment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}