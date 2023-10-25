<script>
    export let title = "";
</script>

<h2 class={title}><slot></slot></h2>

<style>
    .signup {
        text-align: center;
        margin: 30px;
    }

    .signin {
        text-align: center;
        margin: 30px;
    }
</style>