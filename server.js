'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const session = require('express-session');
const app = express();
const riotRenderComponent = require('./libs/renderComponent');
const validation = require('./libs/validation');

let oneDay = 86400000;

// setup session
app.use(session({
    secret: 'space monkey',
    saveUninitialized: false,
    resave: true
}));

// compress middleware
app.use(compression());

// this will let us get the data from a POST
app.use(bodyParser.json());

// middleware logger
app.use(morgan('dev'));

// middleware to render component;
app.use(riotRenderComponent({ path: `${__dirname}/components`}));

// middleware for validating
app.use(validation());

// allow access to public
app.use(express.static(`${__dirname}/public`, { maxAge: oneDay }));

// attach routes
app.use(require('./routes/index'));

app.listen(8080, '127.0.0.1',  err => err ? console.log(err) : console.log('server started 127.0.0.1:8080'));
