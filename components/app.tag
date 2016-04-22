require('./main-header.tag');

<app>

    <main-header title={opts.title} user={opts.user}></main-header>


    <script>

        const app = this;

        app.user = opts.user;

    </script>

</app>