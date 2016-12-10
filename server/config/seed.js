/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

/*User.find({}).remove(function() {
  User.create( {
    provider: 'local',
    role: 'admin',
    name: 'Administrator 01',
    email: 'admin01@email.com',
    password: 'admin',
    active:true,
    date: Date()
  }}, {
    provider: 'local',
    role: 'doctor',
    name: 'Dr James Smith',
    email: 'james.smith@email.com',
    password: 'doctor'
  }, {
    provider: 'local',
    role: 'doctor',
    name: 'Dr Samuel Sam',
    email: 'samuel.sam@email.com',
    password: 'doctor'
  },{
    provider: 'local',
    role: 'doctor',
    name: 'Dr John Jackson',
    email: 'john.jackson@email.com',
    password: 'doctor'
  }, {
    provider: 'local',
    role: 'patient',
    name: 'Mathew Mcarthy',
    email: 'mathew.mcarthy@email.com',
    password: 'patient'
  }, {
    provider: 'local',
    role: 'patient',
    name: 'Mark Jack',
    email: 'mark.jack@email.com',
    password: 'patient'
  }, {
    provider: 'local',
    role: 'patient',
    name: 'April Sam',
    email: 'april.sam@email.com',
    password: 'patient'
  }, function() {
      console.log('finished populating users');
    }
  );
});*/