'use strict';

const express = require('express');
const views = express.Router();


views.get('/', (req, res) => {

    res.renderComponent({
        title: 'Riot Server Rendering',
        tagName: 'App',
        opts: {
            user: req.user || false,
            title: 'Hello World'
        }
    });

});

module.exports = views;