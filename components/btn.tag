<btn>

    <button type="button" class={classSettings} onclick={onclick}>{title}</button>

    <script>
        'use strict';

        let Btn = this;

        Btn.title = opts.title || '';
        Btn.size = opts.size || 'md';
        Btn.type = opts.type || 'default';

        Btn.classSettings = (opts.type || 'default') + ' ' + (opts.size || 'md');

        Btn.onclick = e => {
            if (typeof opts.onclick === 'function') opts.onclick(e, Btn);
        };

    </script>

    <style>

        btn button {
            font-family: 'Raleway', serif;
            line-height: 1.3;
            font-size: 14px;
            font-weight: 600;
            padding: 12px 18px;
            outline: none;
            border: none;
            margin: 10px;
            cursor: pointer;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #ffffff;
            text-transform: none;
            transition: all 60ms ease-in-out;
        }

        btn button:active {
            opacity: .80;
            transform: scale(.98);
            transition: all 60ms ease;
        }

        btn button.default { background: #95a5a6; }
        btn button.success { background: #3ac569; }
        btn button.danger { background: #c0392b; }
        btn button.warning { background: #e67e22; }
        btn button.dark { background: #333030; }

        btn button.lg {
            line-height: 1.4;
            font-size: 18px;
            font-weight: 600;
            padding: 14px 20px;
        }
        btn button.md {
            line-height: 1.2;
            font-size: 16px;
            font-weight: 600;
            padding: 12px 18px;
        }
        btn button.sm {
            line-height: 1.0;
            font-size: 14px;
            font-weight: 450;
            padding: 10px 14px;
        }

    </style>

</btn>
