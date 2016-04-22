require('./main-header.tag');

<app>

    <main-header title={opts.title} user={this.user} />


    <script>

        this.user = opts.user;

    </script>

    <style>

        @import url(https://fonts.googleapis.com/css?family=Raleway);

        body {
            font-family: 'Raleway', serif;
        }

    </style>

</app>