<btn>

    <style>

        btn button {
            font-family: 'Raleway', serif;
            outline: none;
            border: none;
            padding: 12px 18px;
            margin: 10px;
            cursor: pointer;
            justify-content: center;
            align-items: center;
            text-align: center;
            line-height: 1.3;
            font-size: 14px;
            color: #ffffff;
            text-transform: none;
            font-weight: 500;
            transition: all 60ms ease-in-out;
        }

        btn button:active {
            opacity: .75;
            transform: scale(.97);
            transition: all 60ms ease;
        }

        btn button.default { background: #95a5a6; }
        btn button.success { background: #3ac569; }
        btn button.danger { background: #c0392b; }
        btn button.warning { background: #e67e22; }
        btn button.dark { background: #333030; }

    </style>

    <button type="button" class={classSettings} onclick={onclick}>{title}</button>

    <script>

        let Btn = this;

        Btn.title = opts.title || '';
        Btn.size = opts.size || 'md';
        Btn.type = opts.type || 'default';

        Btn.classSettings = (opts.type || 'default') + ' ' + (opts.size || 'md');

        Btn.onclick = e => {
            if (typeof opts.onclick === 'function')
                opts.onclick(e, Btn);
            };
    </script>
</btn>
