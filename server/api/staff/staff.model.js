'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StaffSchema = new Schema({
  firstName: String,
  lastName:String,
  jobType:String,
  info: String,
   userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
  active: Boolean
});

module.exports = mongoose.model('Staff', StaffSchema);