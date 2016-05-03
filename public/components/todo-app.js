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

},{}],2:[function(require,module,exports){
'use strict';

module.exports = require('./menu-item.tag');

riot.tag2('main-footer', '<menu-item btn-title="Find"></menu-item> <menu-item btn-title="Edit"></menu-item> <menu-item btn-title="Share"></menu-item> <menu-item btn-title="Punch"></menu-item>', 'main-footer { box-shadow: 0 4px #2980b9; height: 80px; background: #3699db; display: flex; justify-content: space-between; margin-bottom: 4px; }', '', function (opts) {});

},{"./menu-item.tag":4}],3:[function(require,module,exports){
'use strict';

module.exports = require('./menu-item.tag');
require('./overlay-menu.tag');
var BrowserRequest = require('../public/js/browserRequest');

riot.tag2('main-header', '<div class="left-section"> <menu-item onclick="{toggleMenu}" btn-title="Menu"></menu-item> </div> <div class="middle-section"> <h1>{title}</h1> </div> <div class="right-section"> <menu-item if="{!state.user}" on-click="{signInUser}" btn-title="Sign In"></menu-item> <menu-item if="{state.user}" on-click="{signOutUser}" btn-title="Sign Out"></menu-item> </div> <overlay-menu if="{state.isMenuOpen}" state="{opts.state}"></overlay-menu>', 'main-header { box-shadow: 0 4px #2980b9; height: 80px; display: flex; flex-direction: row; background: #3699db; } main-header .left-section{ width: 25%; } main-header .right-section { width: 25%; } main-header .right-section menu-item{ position: absolute; right: 10px; } main-header .middle-section{ text-align:center; width: 50%; }', '', function (opts) {
    'use strict';

    var mainHeader = this;

    mainHeader.state = opts.state;

    mainHeader.toggleMenu = function () {

        mainHeader.state.trigger('toggle-menu');
    };

    mainHeader.signInUser = function (e, leftMenuItemTag) {

        var request = new BrowserRequest({ json: true });
        var data = { email: 'tektronix775@aol.com', password: 'abcdefg' };

        var promise = request.post('/api/v0.1/signin', data);

        promise.then(function (data) {

            mainHeader.state.trigger('user-sign-in', data.user);
        });
    };

    mainHeader.signOutUser = function () {

        mainHeader.state.trigger('user-sign-out');
    };

    mainHeader.on('update', function () {

        mainHeader.title = opts.state.user ? opts.state.user.alias : opts.state.title;
    });

    mainHeader.state.on('toggle-menu', function () {

        mainHeader.state.isMenuOpen = !mainHeader.state.isMenuOpen;
        mainHeader.update();
    });
});

},{"../public/js/browserRequest":7,"./menu-item.tag":4,"./overlay-menu.tag":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

module.exports = riot.tag2('overlay-menu', '<a href="javascript:void(0)" class="closebtn" onclick="{hideMenu}">&times;</a> <div class="overlay-content"> <a href="#" class="overlay-item">About</a> <a href="#" class="overlay-item">Posts</a> <a href="#" class="overlay-item">Settings</a> </div>', 'overlay-menu { height: 100%; width: 100%; position: fixed; z-index: 1; left: 0; top: 0; background-color: rgb(0,0,0); background-color: rgba(0,0,0, 0.9); overflow-x: hidden; } .overlay-content { position: relative; top: 25%; width: 100%; text-align: center; margin-top: 30px; transform: perspective(500px); transform-style: preserve-3d; } overlay-menu a { padding: 8px; text-decoration: none; font-size: 36px; color: #818181; display: block; transition: 0.3s; } overlay-menu .overlay-item { transition: .4s; } overlay-menu .overlay-item:active { transform: scale(0.3); } overlay-menu a:hover, overlay-menu a:focus { color: #f1f1f1; } overlay-menu .closebtn { position: absolute; top: 20px; right: 45px; font-size: 60px !important; } @media screen and (max-height: 450px) { overlay-menu a {font-size: 20px} overlay-menu .closebtn { font-size: 40px !important; top: 15px; right: 35px; } }', '', function (opts) {
        'use strict';

        var overlayMenu = this;

        overlayMenu.state = opts.state;

        overlayMenu.hideMenu = function () {

                overlayMenu.state.trigger('toggle-menu');
        };
});

},{}],6:[function(require,module,exports){
'use strict';

module.exports = require('./main-header.tag');
require('./main-footer.tag');
require('./btn.tag');

riot.tag2('todo-app', '<main-header title="{state.title}" user="{state.user}" state="{state}"></main-header> <main> <ul></ul> <btn type="default" size="lg" title="Default"></btn> <btn type="success" size="lg" title="Success"></btn> <btn type="danger" title="Danger"></btn> <btn type="warning" title="Warning"></btn> <btn type="dark" title="Dark"></btn> </main> <main-footer></main-footer>', '@import url(https://fonts.googleapis.com/css?family=Raleway); body { margin: 0; } todo-app { font-family: \'Raleway\', serif; display: flex; min-height: 100vh; flex-direction: column; } main { margin: 4px 0 0 0; flex: 1; }', '', function (opts) {
    'use strict';

    var todoApp = this;

    todoApp.state = riot.observable(opts.state);
    console.log(todoApp.state);

    todoApp.state.on('user-sign-in', function (userData) {

        todoApp.state.user = userData;
        todoApp.update();

        console.log(todoApp.state);
    });

    todoApp.state.on('user-sign-out', function () {

        todoApp.state.user = false;
        todoApp.update();

        console.log(todoApp.state);
    });
});

},{"./btn.tag":1,"./main-footer.tag":2,"./main-header.tag":3}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BrowserRequest = function () {
    function BrowserRequest(options) {
        _classCallCheck(this, BrowserRequest);

        this.method = options.method || 'GET';
        this.json = options.json || false;
        this.contentType = this.json ? 'application/json' : 'text/plain';
    }

    _createClass(BrowserRequest, [{
        key: 'post',
        value: function post(url, data, query) {
            var _this = this;

            return new Promise(function (resolve, reject) {

                var req = new XMLHttpRequest();
                var postData = _this.json ? JSON.stringify(data) : data;

                req.open('POST', url);
                req.setRequestHeader('content-type', _this.contentType);
                req.send(postData);

                req.onload = function () {

                    req.status == 200 ? resolve(_this.json ? JSON.parse(req.responseText) : req.responseText) : reject(Error(req.statusText));
                };

                // Handle network errors
                req.onerror = function () {
                    reject(Error('Network Error'));
                };
            });
        }
    }]);

    return BrowserRequest;
}();

module.exports = BrowserRequest;

},{}]},{},[6]);
