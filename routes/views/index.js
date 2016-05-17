'use strict';

const express = require('express');
const views = express.Router();

views.get('/', (req, res) => {

    let state =  {
        user: req.user || false,
        title: 'Riot Rocks',
        isMenuOpen: false
    };

    res.renderComponent({
        title: 'Riot Server Rendering',
        tagName: 'todo-app',
        opts: {state}
    });

});

module.exports = views;
