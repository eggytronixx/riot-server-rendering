require('./mainHeader.tag');

<app>

    <mainHeader title={opts.title} user={opts.user}></mainHeader>


    <script>

        const app = this;

        app.user = opts.user;

    </script>

</app>