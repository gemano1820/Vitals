'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
  title: String,
  date: String,
  patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        },
  doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff'
        },
  type:String,
  active: Boolean
});

module.exports = mongoose.model('Appointment', AppointmentSchema);