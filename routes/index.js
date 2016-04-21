'use strict';

const express = require('express');
const router = express.Router();
const api = require('./api/index');
const views = require('./views/index');

// api routes
router.use('/api/v0.1', api);

// view routes
router.use('/', views);


module.exports = router;