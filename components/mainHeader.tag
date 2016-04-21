<mainHeader>

    <h1>{title}</h1>

    <button if={!user} onclick={signIn} > sign in </button>


    <script>

        const mainHeader = this;

        mainHeader.title = opts.title;

        mainHeader.signIn = function () {

            console.log('trying to sign in');


        };

    </script>

</mainHeader>