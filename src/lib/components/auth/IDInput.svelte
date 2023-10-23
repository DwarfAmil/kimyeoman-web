<script>
    export let placeholder = 'Enter your ID';

    export let id = '';

    export let input = "";
</script>

<input class={input} type="text" placeholder={placeholder} bind:value={id}>

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