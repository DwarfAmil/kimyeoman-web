<script>
    export let input = "";
</script>

<input class="input" bind:value={input} on:keydown>

<style>
    .input {
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        width: 400px;
        background-color: whitesmoke;
        border: 1px solid #dcdcdc;
        font-family: "나눔스퀘어 네오 Regular";
    }
</style>