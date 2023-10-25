<script>
    export let state = "";
</script>

<button class={state} on:click><slot></slot></button>

<style>
    .signup {
        align-content: center;
        width: 200px;
        margin: 20px auto;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .signin {
        align-content: center;
        width: 200px;
        margin: 20px auto;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>