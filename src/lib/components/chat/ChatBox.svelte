<script>
    export let state = "";
    export let massage = "";
</script>

<div class="line">
    <span class="{state}">{massage}</span>
</div>

<style>
    .line {
        display: flex;
        margin: 10px 0;
    }

    .ai{
        padding: 10px;
        border-radius: 10px;
        background-color: #f5ebe0;
        margin: 0 10px;
        max-width: 200px;
    }

    .user {
        padding: 10px;
        border-radius: 10px;
        margin: 0 10px;
        max-width: 200px;
        margin-left: auto;
        background-color: #edede9;
    }
</style>