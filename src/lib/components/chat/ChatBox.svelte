<script lang="ts">
    export let state = "";
    export let message = "";

    function renderItalic(text: string) {
        return text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    let italicText = renderItalic(message);
</script>

<div class="line">
    <span class="{state}">{@html italicText}</span>
</div>

<style>
    .line {
        display: flex;
        margin: 10px 0;
    }

    .bot{
        padding: 10px;
        border-radius: 10px;
        background-color: #f5ebe0;
        margin: 0 10px;
        max-width: 300px;
        font-family: "나눔스퀘어 네오 Regular";
        letter-spacing: 0.04rem;
        line-height: 1.25;
    }

    .user {
        padding: 10px;
        border-radius: 10px;
        margin: 0 10px;
        max-width: 300px;
        margin-left: auto;
        background-color: #edede9;
        font-family: "나눔스퀘어 네오 Regular";
        letter-spacing: 0.04rem;
        line-height: 1.25;
    }
</style>