'use strict';

var _ = require('lodash');
var Healthsummary = require('./healthsummary.model');
var ObjectId = require('mongoose').Types.ObjectId; 

// Get list of healthsummarys
exports.index = function(req, res) {
  Healthsummary.find(function (err, healthsummarys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(healthsummarys);
  });
};

exports.getUserHealthSummary = function(req, res) {
  var userId = req.params.id;
  
  Healthsummary.find({'patient': new ObjectId(userId), 'active':true} ).populate('doctor', 'name').exec(function (err, appointments) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(appointments);
    })
};

// Get a single healthsummary
exports.show = function(req, res) {
  Healthsummary.findById(req.params.id, function (err, healthsummary) {
    if(err) { return handleError(res, err); }
    if(!healthsummary) { return res.status(404).send('Not Found'); }
    return res.json(healthsummary);
  });
};

// Creates a new healthsummary in the DB.
exports.create = function(req, res) {
  Healthsummary.create(req.body, function(err, healthsummary) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(healthsummary);
  });
};

// Updates an existing healthsummary in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Healthsummary.findById(req.params.id, function (err, healthsummary) {
    if (err) { return handleError(res, err); }
    if(!healthsummary) { return res.status(404).send('Not Found'); }
    var updated = _.merge(healthsummary, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(healthsummary);
    });
  });
};

// Deletes a healthsummary from the DB.
exports.destroy = function(req, res) {
  Healthsummary.findById(req.params.id, function (err, healthsummary) {
    if(err) { return handleError(res, err); }
    if(!healthsummary) { return res.status(404).send('Not Found'); }
    healthsummary.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}