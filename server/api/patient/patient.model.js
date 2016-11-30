'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PatientSchema = new Schema({
  firstName: String,
  lastName:String,
  dateOfBirth: String,
  sex:String,
  membership: String,
  active: Boolean,
  userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
});

module.exports = mongoose.model('Patient', PatientSchema);