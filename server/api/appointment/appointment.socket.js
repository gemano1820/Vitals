/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Appointment = require('./appointment.model');

exports.register = function(socket) {
  Appointment.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Appointment.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('appointment:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('appointment:remove', doc);
}