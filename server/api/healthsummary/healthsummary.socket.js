/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Healthsummary = require('./healthsummary.model');

exports.register = function(socket) {
  Healthsummary.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Healthsummary.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('healthsummary:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('healthsummary:remove', doc);
}