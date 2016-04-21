<mainHeader>

    <h1>{title}</h1>

    <button if={!user} onclick={signIn}> sign in </button>


    <script>

        const mainHeader = this;

        mainHeader.title = opts.title;

        mainHeader.signIn = () => {

            console.log('trying to sign in');

        };

    </script>

</mainHeader>