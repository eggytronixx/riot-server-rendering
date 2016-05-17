'use strict';

const express = require('express');
const api = express.Router();


api.get('/', (req, res) => {

    res.status(200).json({msg: 'hello from api'});

});

api.post('/signin', (req, res) => {

    req.check('body').field('email')
       .is('string', 'Invalid email field, must be a string.')
       .is('email', 'Invalid email field, must be a valid email.');

    req.check('body').field('password')
       .is('string', 'Invalid password field.');

    let errors = req.validationErrors();

    if(errors.length) return res.status(400).json(errors);

    let user = {
        name: { first: 'Edgar', last: 'Nunes'},
        alias: 'Eggytronixx'
    };

    res.status(200).json({user});

});

module.exports = api;
