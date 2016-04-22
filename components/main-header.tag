require('./menu-item.tag');

<main-header>

    <div class="left-section">
        <menu-item onClick={openMenu} title="Menu" />
    </div>

    <div class="middle-section">
        <h1>{title}</h1>
    </div>

    <div class="right-section">
        <menu-item if={!user} onClick={signInUser} title="Sign In" />
    </div>

    <script>

        const mainHeader = this;

        mainHeader.title = opts.title;

        mainHeader.openMenu = function (e) {

            console.log('trigger open menu event')

        };

        mainHeader.signInUser = function (e) {
            console.log('trigger sign in window')
        }

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