<main-header>

    <div class="left-section">
        <button onclick={openMenu} class="menu-item"></button>
    </div>

    <div class="middle-section">
        <h1>{title}</h1>
    </div>

    <div class="right-section">
        <button if={!user} class="menu-item"> sign in </button>
    </div>

    <script>

        const mainHeader = this;

        mainHeader.title = opts.title;

        mainHeader.openMenu = function (e) {

            console.log(e)

        };

    </script>

    <style>

        main-header {
            height: 80px;
            display: flex;
            flex-direction: row;
            background: #3699db;
        }

        main-header .left-section{ width: 25%;  }

        main-header .right-section { width: 25%;  }

        main-header .middle-section{ text-align: center;  width: 50%;  }


        main-header .menu-item {
            margin: 10px 10px;
            height: 60px;
            width: 60px;
            border: none;
            background: #2980b9;
        }


    </style>

</main-header>