'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
  subject: String,
  date: String,
  patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  type:String,
  comments: String,
  active: Boolean
});

module.exports = mongoose.model('Appointment', AppointmentSchema);