<menu-item>

    <button onclick={onClick}>{title}</button>

    <script>

        function defaultFn() {}

        const menuItem = this;

        menuItem.title = opts.btnTitle || '';
        menuItem.onClick = function (e) {

            if(opts.onClick) opts.onClick(e, menuItem);

        };

    </script>

    <style>

        menu-item button{
            border-radius: 4px;
            font-weight: 400;
            font-size: 18px;
            font-family: 'Raleway', serif;
            margin: 10px 10px;
            height: 60px;
            min-width: 60px;
            border: none;
            background: #2980b9;
            box-shadow: 0 4px #1a4869;
        }

        menu-item button:active {
            box-shadow: 0 0 #1a4869;
            transform: translateY(2px);
        }

        menu-item button:focus {
            border: none;
            outline:none;
        }

    </style>

</menu-item>