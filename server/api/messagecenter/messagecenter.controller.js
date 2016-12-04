'use strict';

var _ = require('lodash');
var Messagecenter = require('./messagecenter.model');
var ObjectId = require('mongoose').Types.ObjectId; 

// Get list of messagecenters
exports.index = function(req, res) {
  Messagecenter.find(function (err, messagecenters) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(messagecenters);
  });
};

exports.getSentItems = function(req, res) {
  var userId = req.params.id;
  
  Messagecenter.find({'emailFrom': new ObjectId(userId), 'active':true} ).populate('emailTo', 'name').exec(function (err, appointments) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(appointments);
    })
};

exports.getInboxItems = function(req, res) {
  var userId = req.params.id;
  
  Messagecenter.find({'emailTo': new ObjectId(userId), 'active':true} ).populate('emailFrom', 'name').exec(function (err, appointments) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(appointments);
    })
};

// Get a single messagecenter
exports.show = function(req, res) {
  Messagecenter.findById(req.params.id, function (err, messagecenter) {
    if(err) { return handleError(res, err); }
    if(!messagecenter) { return res.status(404).send('Not Found'); }
    return res.json(messagecenter);
  });
};

// Creates a new messagecenter in the DB.
exports.create = function(req, res) {
  Messagecenter.create(req.body, function(err, messagecenter) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(messagecenter);
  });
};

// Updates an existing messagecenter in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Messagecenter.findById(req.params.id, function (err, messagecenter) {
    if (err) { return handleError(res, err); }
    if(!messagecenter) { return res.status(404).send('Not Found'); }
    var updated = _.merge(messagecenter, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(messagecenter);
    });
  });
};

// Deletes a messagecenter from the DB.
exports.destroy = function(req, res) {
  Messagecenter.findById(req.params.id, function (err, messagecenter) {
    if(err) { return handleError(res, err); }
    if(!messagecenter) { return res.status(404).send('Not Found'); }
    messagecenter.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}