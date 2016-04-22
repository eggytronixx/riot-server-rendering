(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = require('./main-header.tag');

riot.tag2('app', '<main-header title="{opts.title}" user="{this.user}"></main-header>', '@import url(https://fonts.googleapis.com/css?family=Raleway); body { font-family: \'Raleway\', serif; }', '', function (opts) {

        this.user = opts.user;
});

},{"./main-header.tag":2}],2:[function(require,module,exports){
'use strict';

module.exports = require('./menu-item.tag');
require('./overlay-menu.tag');

riot.tag2('main-header', '<div class="left-section"> <menu-item onclick="{toggleMenu}" btn-title="Menu"></menu-item> </div> <div class="middle-section"> <h1>{title}</h1> </div> <div class="right-section"> <menu-item if="{!user}" on-click="{signInUser}" btn-title="Sign In"></menu-item> </div> <overlay-menu if="{isMenuOpen}"></overlay-menu>', 'main-header { box-shadow: 0 4px #2980b9; height: 80px; display: flex; flex-direction: row; background: #3699db; } main-header .left-section{ width: 25%; } main-header .right-section { width: 25%; } main-header .right-section menu-item{ position: absolute; right: 10px; } main-header .middle-section{ text-align:center; width: 50%; }', '', function (opts) {

    var mainHeader = this;

    mainHeader.title = opts.title;
    mainHeader.isMenuOpen = false;

    mainHeader.toggleMenu = function () {

        mainHeader.isMenuOpen = !mainHeader.isMenuOpen;
    };

    mainHeader.signInUser = function (e, leftMenuItemTag) {

        leftMenuItemTag.title = leftMenuItemTag.title === 'Sign Out' ? 'Sign In' : 'Sign Out';
    };
});

},{"./menu-item.tag":3,"./overlay-menu.tag":4}],3:[function(require,module,exports){
'use strict';

module.exports = riot.tag2('menu-item', '<button onclick="{onClick}">{title}</button>', 'menu-item button{ border-radius: 4px; font-weight: 400; font-size: 18px; font-family: \'Raleway\', serif; margin: 10px 10px; height: 60px; min-width: 60px; border: none; background: #2980b9; box-shadow: 0 4px #1a4869; } menu-item button:active { box-shadow: 0 0 #1a4869; transform: translateY(2px); } menu-item button:focus { border: none; outline:none; }', '', function (opts) {

        function defaultFn() {}

        var menuItem = this;

        menuItem.title = opts.btnTitle || '';
        menuItem.onClick = function (e) {

                if (opts.onClick) opts.onClick(e, menuItem);
        };
});

},{}],4:[function(require,module,exports){
'use strict';

module.exports = riot.tag2('overlay-menu', '<a href="javascript:void(0)" class="closebtn" onclick="{hideMenu}">&times;</a> <div class="overlay-content"> <a href="#">About</a> <a href="#">Services</a> <a href="#">Clients</a> <a href="#">Contact</a> </div>', 'overlay-menu { height: 100%; width: 100%; position: fixed; z-index: 1; left: 0; top: 0; background-color: rgb(0,0,0); background-color: rgba(0,0,0, 0.9); overflow-x: hidden; } .overlay-content { position: relative; top: 25%; width: 100%; text-align: center; margin-top: 30px; } overlay-menu a { padding: 8px; text-decoration: none; font-size: 36px; color: #818181; display: block; transition: 0.3s; } overlay-menu a:hover, overlay-menu a:focus { color: #f1f1f1; } overlay-menu .closebtn { position: absolute; top: 20px; right: 45px; font-size: 60px !important; } @media screen and (max-height: 450px) { overlay-menu a {font-size: 20px} overlay-menu .closebtn { font-size: 40px !important; top: 15px; right: 35px; } }', '', function (opts) {

    var overlayMenu = this;

    overlayMenu.hideMenu = function () {

        overlayMenu.parent.isMenuOpen = false;
        overlayMenu.parent.update();
    };
});

},{}]},{},[1]);
