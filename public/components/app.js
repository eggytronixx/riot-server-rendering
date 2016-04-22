(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = require('./main-header.tag');

riot.tag2('app', '<main-header title="{opts.title}" user="{opts.user}"></main-header>', '@import url(https://fonts.googleapis.com/css?family=Raleway); body { font-family: \'Raleway\', serif; }', '', function (opts) {

        var app = this;
        app.user = opts.user;
});

},{"./main-header.tag":2}],2:[function(require,module,exports){
'use strict';

module.exports = require('./menu-item.tag');

riot.tag2('main-header', '<div class="left-section"> <menu-item onclick="{openMenu}" title="Menu"></menu-item> </div> <div class="middle-section"> <h1>{title}</h1> </div> <div class="right-section"> <menu-item if="{!user}" onclick="{signInUser}" title="Sign In"></menu-item> </div>', 'main-header { box-shadow: 0 4px #2980b9; height: 80px; display: flex; flex-direction: row; background: #3699db; } main-header .left-section{ width: 25%; } main-header .right-section { width: 25%; } main-header .right-section menu-item{ position: absolute; right: 10px; } main-header .middle-section{ text-align:center; width: 50%; }', '', function (opts) {

    var mainHeader = this;

    mainHeader.title = opts.title;

    mainHeader.openMenu = function (e) {

        console.log('trigger open menu event');
    };

    mainHeader.signInUser = function (e) {
        console.log('trigger sign in window');
    };
});

},{"./menu-item.tag":3}],3:[function(require,module,exports){
'use strict';

module.exports = riot.tag2('menu-item', '<button onclick="{onClick}">{title}</button>', 'menu-item button{ border-radius: 4px; font-weight: 400; font-size: 18px; font-family: \'Raleway\', serif; margin: 10px 10px; height: 60px; min-width: 60px; border: none; background: #2980b9; box-shadow: 0 4px #1a4869; } menu-item button:active { box-shadow: 0 0 #1a4869; transform: translateY(2px); } menu-item button:focus { border: none; outline:none; }', '', function (opts) {

        function defaultFn() {}

        var menuItem = this;

        menuItem.title = opts.title || '';
        menuItem.onClick = opts.onClick || defaultFn;
});

},{}]},{},[1]);
