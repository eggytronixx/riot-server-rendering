'use strict';

const express = require('express');
const views = express.Router();


views.get('/', (req, res) => {

    let options = {
        title: 'Riot Server Rendering',
        tagName: 'app',
        props: { user: req.user || false },
        script: 'js/app'
    };

    res.renderComponent(options);

});

module.exports = views;