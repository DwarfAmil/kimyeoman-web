<script>
    export let placeholder = 'Enter your password';

    export let passwordCheck = '';
</script>

<input class="input" type="password" placeholder={placeholder} bind:value={passwordCheck}>

<style>
    .input {
        align-content: center;
        width: 400px;
        margin: 10px auto;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>