'use strict';

const express = require('express');
const router = express.Router();
const api = require('./api/index');
const views = require('./views/index');

// api routes
router.use('/api/v0.1', api);

// view routes
router.use('/', views);


router.get('/session', (req, res) => {

    res.status(200).json(req.session);

})


module.exports = router;