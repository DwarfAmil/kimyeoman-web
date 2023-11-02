<script lang="ts">
    import {afterUpdate} from "svelte";

    let historyElement: HTMLDivElement

    afterUpdate(() => {
        autoScrollToBottom(historyElement)
    })
    const autoScrollToBottom = async (node: HTMLElement) => {
        node.scroll({
            top: node.scrollHeight,
            behavior: "smooth"
        })
    }
</script>

<div class="chat-content" bind:this={historyElement}>
    <slot>

    </slot>
</div>

<style>
    .chat-content {
        height: 700px;
        width: 600px;
        overflow-y: auto;
        margin-bottom: 15px;
    }
</style>