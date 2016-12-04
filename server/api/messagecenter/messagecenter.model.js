'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessagecenterSchema = new Schema({
  subject: String,
  date: String,
  emailTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  emailFrom: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  content: String,
  type:String,
  active: Boolean
});

module.exports = mongoose.model('Messagecenter', MessagecenterSchema);