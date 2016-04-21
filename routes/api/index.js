'use strict';

const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {

    res.status(200).json({msg: 'hello from api'});

});

module.exports = api;