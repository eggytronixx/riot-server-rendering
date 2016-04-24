require('./main-header.tag');
require('./main-footer.tag');

<todo-app>

    <main-header title={state.title} user={state.user} state={state} />

    <main>
        <ul></ul>
    </main>

    <main-footer />


    <script>
        'use strict';

        const todoApp = this;

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


    </script>

    <style>

        @import url(https://fonts.googleapis.com/css?family=Raleway);

        body{
            margin: 0;
        }

        todo-app {
            font-family: 'Raleway', serif;
            display: flex;
            min-height: 100vh;
            flex-direction: column;
        }

        main {
            margin: 4px 0 0 0;
            flex: 1;
            background: darkgrey;
        }

    </style>

</todo-app>