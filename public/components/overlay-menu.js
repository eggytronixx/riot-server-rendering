(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = riot.tag2('overlay-menu', '<a href="javascript:void(0)" class="closebtn" onclick="{hideMenu}">&times;</a> <div class="overlay-content"> <a href="#" class="overlay-item">About</a> <a href="#" class="overlay-item">Posts</a> <a href="#" class="overlay-item">Settings</a> </div>', 'overlay-menu { height: 100%; width: 100%; position: fixed; z-index: 1; left: 0; top: 0; background-color: rgb(0,0,0); background-color: rgba(0,0,0, 0.9); overflow-x: hidden; } .overlay-content { position: relative; top: 25%; width: 100%; text-align: center; margin-top: 30px; transform: perspective(500px); transform-style: preserve-3d; } overlay-menu a { padding: 8px; text-decoration: none; font-size: 36px; color: #818181; display: block; transition: 0.3s; } overlay-menu .overlay-item { transition: .4s; } overlay-menu .overlay-item:active { transform: scale(0.3); } overlay-menu a:hover, overlay-menu a:focus { color: #f1f1f1; } overlay-menu .closebtn { position: absolute; top: 20px; right: 45px; font-size: 60px !important; } @media screen and (max-height: 450px) { overlay-menu a {font-size: 20px} overlay-menu .closebtn { font-size: 40px !important; top: 15px; right: 35px; } }', '', function (opts) {
        'use strict';

        var overlayMenu = this;

        overlayMenu.state = opts.state;

        overlayMenu.hideMenu = function () {

                overlayMenu.state.trigger('toggle-menu');
        };
});

},{}]},{},[1]);
