(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = riot.tag2('main-header', '<div class="left-section"> <button onclick="{openMenu}" class="menu-item"></button> </div> <div class="middle-section"> <h1>{title}</h1> </div> <div class="right-section"> <button if="{!user}" class="menu-item"> sign in </button> </div>', 'main-header { height: 80px; display: flex; flex-direction: row; background: #3699db; } main-header .left-section{ width: 25%; } main-header .right-section { width: 25%; } main-header .middle-section{ text-align: center; width: 50%; } main-header .menu-item { margin: 10px 10px; height: 60px; width: 60px; border: none; background: #2980b9; }', '', function (opts) {

        var mainHeader = this;

        mainHeader.title = opts.title;

        mainHeader.openMenu = function (e) {

                console.log(e);
        };
});

},{}]},{},[1]);
