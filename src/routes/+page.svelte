<script lang="ts">
    import axios from "axios";
    import CharBar from "$lib/components/chat/CharBar.svelte";
    import ChatContent from "$lib/components/chat/ChatContent.svelte";
    import ChatBox from "$lib/components/chat/ChatBox.svelte";
    import ChatInput from "$lib/components/chat/ChatInput.svelte";
    import CharTitle from "$lib/components/chat/CharTitle.svelte";
    import SendBtn from "$lib/components/chat/SendBtn.svelte";
    import { Client } from "booga.js"
    import { chatHistory } from "../stores/ChatHistoryStore.ts";
    import CharBtn from "$lib/components/chat/CharBtn.svelte";

    let input = "";
    let char = "호두";
    let charEn = "Hutao";

    const chat = async   () => {
        console.log(input)

        $chatHistory.push({
            sender: "user",
            message: input
        })

        chatHistory.update($chatHistory => {
            return $chatHistory
        })

        const client = new Client({
            uri: "https://ruling-lol-rejected-automatic.trycloudflare.com/api"
        })

        client.chat(input, {character: charEn}).then(res => {
            console.log(res)
            $chatHistory.push({
                sender: "bot",
                message: res
            })

            chatHistory.update($chatHistory => {
                return $chatHistory
            })
        })
    }

    const charChange = (charName: string, charNameEn: string) => {
        char = charName
        charEn = charNameEn
    }
</script>

<CharBar>
    <CharBtn on:click={()=>charChange("호두", "Hutao")}>호두</CharBtn>
    <CharBtn on:click={()=>charChange("라이덴 쇼군", "Raiden")}>라이덴 쇼군</CharBtn>
    <CharBtn on:click={()=>charChange("감우", "Gamyu")}>감우</CharBtn>
    <CharBtn on:click={()=>charChange("각청", "Keqing")}>각청</CharBtn>
</CharBar>

<div class="main">
    <CharTitle>{char}</CharTitle>
    <ChatContent>
        {#each $chatHistory as chat}
            <ChatBox state={chat.sender} message={chat.message}/>
        {/each}
    </ChatContent>
    <div><ChatInput bind:input on:keydown={e => {if (e.key === "Enter") chat()}}/><SendBtn on:click={()=>chat()}/></div>
</div>

<style>
    .main {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>