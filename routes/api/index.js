'use strict';

const express = require('express');
const api = express.Router();


api.get('/', (req, res) => {

    res.status(200).json({msg: 'hello from api'});

});

api.post('/signin', (req, res) => {

    console.log(req.body);
    console.log(req.query);
    console.log(req.headers);


    let user = {
        name: { first: 'Edgar', last: 'Nunes'},
        alias: 'Eggytronixx'
    };

    res.status(200).json({user});

});

module.exports = api;

