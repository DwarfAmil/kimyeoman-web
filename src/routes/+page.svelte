<script>
    import axios from "axios";
    import CharBar from "$lib/components/chat/CharBar.svelte";
    import Char from "$lib/components/chat/Char.svelte";
    import ChatContent from "$lib/components/chat/ChatContent.svelte";
    import ChatBox from "$lib/components/chat/ChatBox.svelte";
    import ChatInput from "$lib/components/chat/ChatInput.svelte";
    import CharTitle from "$lib/components/chat/CharTitle.svelte";
    import SendBtn from "$lib/components/chat/SendBtn.svelte";
    import { Client } from "booga.js"

    let input = "";

    const chat = async   () => {
        console.log(input)

        const client = new Client({
            uri: "https://corps-isle-actress-basically.trycloudflare.com/"
        })

        client.chat(input).then(res => {
            // 채팅 띄우기
        })
    }
</script>

<CharBar>
    <Char>
        <a href="#">Hutao</a>
    </Char>
    <Char>
        <a href="#">Raiden</a>
    </Char>
    <Char>
        <a href="#">Gamyu</a>
    </Char>
    <Char>
        <a href="#">Keqing</a>
    </Char>
</CharBar>

<div class="main">
    <CharTitle>호두</CharTitle>
    <ChatContent>
    </ChatContent>
    <div><ChatInput bind:input/><SendBtn on:click={()=>chat()}/></div>
</div>

<style>
    .main {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>