/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Pharmacy = require('./pharmacy.model');

exports.register = function(socket) {
  Pharmacy.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Pharmacy.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('pharmacy:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('pharmacy:remove', doc);
}