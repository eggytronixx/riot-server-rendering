require('./mainHeader.tag');

<app>

    <mainHeader title={opts.title} user={opts.user}></mainHeader>


    <script>

        const App = this;

        App.user = opts.user;

    </script>

</app>