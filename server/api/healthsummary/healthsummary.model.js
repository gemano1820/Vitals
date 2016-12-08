'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HealthsummarySchema = new Schema({
  testname: String,
  date: String,
  patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  enteredBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  testresults:String,
  normalrange: String,
  comments: String,
  active: Boolean
});

module.exports = mongoose.model('Healthsummary', HealthsummarySchema);