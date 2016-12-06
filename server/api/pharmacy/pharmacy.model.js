'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PharmacySchema = new Schema({
  rxName: String,
  numberOfPills: String,
  date:String,
  patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  isOrdered: Boolean,
  comment: String,
  active: Boolean
});

module.exports = mongoose.model('Pharmacy', PharmacySchema);