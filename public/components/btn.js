(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = riot.tag2('btn', '<button type="button" class="{classSettings}" onclick="{onclick}">{title}</button>', 'btn button { font-family: \'Raleway\', serif; outline: none; border: none; padding: 12px 18px; margin: 10px; cursor: pointer; justify-content: center; align-items: center; text-align: center; line-height: 1.3; font-size: 14px; color: #ffffff; text-transform: none; font-weight: 500; transition: all 60ms ease-in-out; } btn button:active { opacity: .75; transform: scale(.97); transition: all 60ms ease; } btn button.default { background: #95a5a6; } btn button.success { background: #3ac569; } btn button.danger { background: #c0392b; } btn button.warning { background: #e67e22; } btn button.dark { background: #333030; }', '', function (opts) {

    var Btn = this;

    Btn.title = opts.title || '';
    Btn.size = opts.size || 'md';
    Btn.type = opts.type || 'default';

    Btn.classSettings = (opts.type || 'default') + ' ' + (opts.size || 'md');

    Btn.onclick = function (e) {
        if (typeof opts.onclick === 'function') opts.onclick(e, Btn);
    };
});

},{}]},{},[1]);
