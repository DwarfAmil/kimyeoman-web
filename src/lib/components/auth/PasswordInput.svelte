<script>
    export let placeholder = 'Enter your password';

    export let password = '';

    export let input = "";
</script>

<input class={input} type="password" placeholder={placeholder} bind:value={password}>

<style>
    .signup {
        align-content: center;
        width: 400px;
        margin: 10px auto;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .signin {
        align-content: center;
        width: 400px;
        margin: 15px auto;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>