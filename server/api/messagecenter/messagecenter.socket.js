/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Messagecenter = require('./messagecenter.model');

exports.register = function(socket) {
  Messagecenter.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Messagecenter.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('messagecenter:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('messagecenter:remove', doc);
}