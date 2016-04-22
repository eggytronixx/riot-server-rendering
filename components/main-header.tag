require('./menu-item.tag');
require('./overlay-menu.tag');

<main-header>

    <div class="left-section">
        <menu-item onClick={toggleMenu} btn-title="Menu" />
    </div>

    <div class="middle-section">
        <h1>{title}</h1>
    </div>

    <div class="right-section">
        <menu-item if={!user} on-click={signInUser} btn-title="Sign In"/>
    </div>

    <overlay-menu if={isMenuOpen}/>


    <script>

        const mainHeader = this;

        mainHeader.title = opts.title;
        mainHeader.isMenuOpen = false;

        mainHeader.toggleMenu = function () {

            mainHeader.isMenuOpen = !mainHeader.isMenuOpen;

        };

        mainHeader.signInUser = function (e, leftMenuItemTag) {

            leftMenuItemTag.title =  leftMenuItemTag.title === 'Sign Out' ? 'Sign In' : 'Sign Out';



        };




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