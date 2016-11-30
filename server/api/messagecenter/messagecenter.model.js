'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessagecenterSchema = new Schema({
  subject: String,
  date: String,
  patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        },
  doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff'
        },
  content: String,
  active: Boolean
});

module.exports = mongoose.model('Messagecenter', MessagecenterSchema);