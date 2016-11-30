'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PharmacySchema = new Schema({
  rxName: String,
  numberOfPills: String,
  patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        },
  doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Staff'
        },
  isOrdered: Boolean,
  active: Boolean
});

module.exports = mongoose.model('Pharmacy', PharmacySchema);