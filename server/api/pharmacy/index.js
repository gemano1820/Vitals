'use strict';

var express = require('express');
var controller = require('./pharmacy.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/getUserPrescriptions/:id', controller.getCurrentUserPrescription);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;