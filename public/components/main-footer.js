(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = require('./menu-item.tag');

riot.tag2('main-footer', '<menu-item btn-title="Find"></menu-item> <menu-item btn-title="Edit"></menu-item> <menu-item btn-title="Share"></menu-item> <menu-item btn-title="Punch"></menu-item>', 'main-footer { box-shadow: 0 4px #2980b9; height: 80px; background: #3699db; display: flex; justify-content: space-between; margin-bottom: 4px; }', '', function (opts) {});

},{"./menu-item.tag":2}],2:[function(require,module,exports){
'use strict';

module.exports = riot.tag2('menu-item', '<button onclick="{onClick}">{title}</button>', 'menu-item button{ border-radius: 4px; font-weight: 400; font-size: 18px; font-family: \'Raleway\', serif; margin: 10px 10px; height: 60px; min-width: 60px; border: none; background: #2980b9; box-shadow: 0 4px #1a4869; } menu-item button:active { box-shadow: 0 0 #1a4869; transform: translateY(2px); } menu-item button:focus { border: none; outline:none; }', '', function (opts) {
    'use strict';

    function defaultFn() {}

    var menuItem = this;

    menuItem.title = opts.btnTitle || '';
    menuItem.onClick = function (e) {

        if (opts.onClick) opts.onClick(e, menuItem);
    };

    menuItem.on('update-title', function (newTitle) {

        menuItem.update({ title: newTitle });
    });
});

},{}]},{},[1]);
