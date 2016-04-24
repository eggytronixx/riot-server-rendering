require('./menu-item.tag');
require('./overlay-menu.tag');
var BrowserRequest = require('../libs/browserRequest');

<main-header>

    <div class="left-section">
        <menu-item onClick={toggleMenu} btn-title="Menu" />
    </div>

    <div class="middle-section">
        <h1>{title}</h1>
    </div>

    <div class="right-section">
        <menu-item if={!state.user} on-click={signInUser} btn-title="Sign In"/>
        <menu-item if={state.user} on-click={signOutUser} btn-title="Sign Out"/>
    </div>

    <overlay-menu if={state.isMenuOpen} state={opts.state}/>


    <script>
        'use strict';

        const mainHeader = this;

        mainHeader.state = opts.state;

        mainHeader.toggleMenu = function () {

            mainHeader.state.trigger('toggle-menu');

        };

        mainHeader.signInUser = function(e, leftMenuItemTag) {

            let request = new BrowserRequest({json: true});
            let data =  {email: 'tektronix775@aol.com', password: 'abcdefg'}

            let promise = request.post('/api/v0.1/signin', data);

            promise.then(function(data){

                mainHeader.state.trigger('user-sign-in', data.user)

            });

        }

        mainHeader.signOutUser = function () {

            mainHeader.state.trigger('user-sign-out');

        }

        mainHeader.on('update', function () {

            mainHeader.title = opts.state.user ? opts.state.user.alias : opts.state.title;

        });

        mainHeader.state.on('toggle-menu', function () {

            mainHeader.state.isMenuOpen = !mainHeader.state.isMenuOpen;
            mainHeader.update();

        });


    </script>

    <style>

        main-header {
            box-shadow: 0 4px #2980b9;
            height: 80px;
            display: flex;
            flex-direction: row;
            background: #3699db;
        }

        main-header .left-section{ width: 25%; }

        main-header .right-section { width: 25%; }

        main-header .right-section menu-item{
            position: absolute;
            right: 10px;
        }

        main-header .middle-section{
            text-align:center;
            width: 50%;
        }

    </style>

</main-header>