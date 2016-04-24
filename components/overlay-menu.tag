<overlay-menu>

    <a href="javascript:void(0)" class="closebtn" onclick={hideMenu}>&times;</a>

    <!-- Overlay content -->
    <div class="overlay-content">
        <a href="#" class="overlay-item">About</a>
        <a href="#" class="overlay-item">Posts</a>
        <a href="#" class="overlay-item">Settings</a>
    </div>


    <script>
        'use strict';

        const overlayMenu = this;

        overlayMenu.state = opts.state;

        overlayMenu.hideMenu = function () {

            overlayMenu.state.trigger('toggle-menu');

        };

    </script>

    <style>

        overlay-menu {
            height: 100%;
            width: 100%;
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            background-color: rgb(0,0,0); /* Black fallback color */
            background-color: rgba(0,0,0, 0.9); /* Black w/opacity */
            overflow-x: hidden; /* Disable horizontal scroll */
        }

        /* Position the content inside the overlay */
        .overlay-content {
            position: relative;
            top: 25%; /* 25% from the top */
            width: 100%; /* 100% width */
            text-align: center; /* Centered text/links */
            margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */

            transform: perspective(500px);
            transform-style: preserve-3d;
        }

        overlay-menu a {
            padding: 8px;
            text-decoration: none;
            font-size: 36px;
            color: #818181;
            display: block; /* Display block instead of inline */
            transition: 0.3s; /* Transition effects on hover (color) */
        }

        /* The navigation links inside the overlay */
        overlay-menu .overlay-item {
            transition: .4s;
        }

        overlay-menu .overlay-item:active {
            transform: scale(0.3);
        }

        /* When you mouse over the navigation links, change their color */
        overlay-menu a:hover, overlay-menu a:focus {

            color: #f1f1f1;
        }

        /* Position the close button (top right corner) */
        overlay-menu .closebtn {
            position: absolute;
            top: 20px;
            right: 45px;
            font-size: 60px !important; /* Override the font-size specified earlier (36px) for all navigation links */
        }

        /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
        @media screen and (max-height: 450px) {
            overlay-menu a {font-size: 20px}
            overlay-menu .closebtn {
                font-size: 40px !important;
                top: 15px;
                right: 35px;
            }
        }

    </style>

</overlay-menu>