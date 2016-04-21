'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();
const renderComponent = require('./libs/renderComponent');

// middleware logger
app.use(morgan('dev'));

// middleware to render component;
app.use(renderComponent({ path: `${__dirname}/components`}));

// allow access to public and component folders
app.use(express.static(`${__dirname}/components`));
app.use(express.static(`${__dirname}/public`));

// attach routes
app.use(require('./routes/index'));

app.listen(3000, '127.0.0.1',  err => err ? console.log(err) : console.log('server started 127.0.0.1:3000'));