<script lang="ts">
    import axios from "axios"
    import type {AxiosResponse} from "axios"
    import CharBar from "$lib/components/chat/CharBar.svelte"
    import ChatContent from "$lib/components/chat/ChatContent.svelte"
    import ChatBox from "$lib/components/chat/ChatBox.svelte"
    import ChatInput from "$lib/components/chat/ChatInput.svelte"
    import CharTitle from "$lib/components/chat/CharTitle.svelte"
    import SendBtn from "$lib/components/chat/SendBtn.svelte"
    import {Client} from "booga.js"
    import {chatHistory} from "../stores/ChatHistoryStore"
    import type {ChatHistory} from "../stores/ChatHistoryStore"
    import CharBtn from "$lib/components/chat/CharBtn.svelte"
    import {get} from "svelte/store"
    import {onMount} from "svelte"
    // import "dotenv/config"

    let input = ""
    let userChat = ""
    let char = "호두"
    let charEn = "Hutao"
    let answer = ""
    let enInput = ""

    interface TranslatorResponse extends AxiosResponse {
        data: {
            text: string
        }
    }

    $: chatHis = $chatHistory

    // Unity Start와 동일
    onMount(async () => {
        if (localStorage.getItem("token") != null) {
            let token = localStorage.getItem("token")
            try {
                const res = await axios.post("http://127.0.0.1:8000/auth/", {token: token});

                if (res.data.error != null) {
                    console.log(res.data.error);
                }

                if (res.data.token != null) {
                    console.log(res.data.token);
                }

                if (res.data.check) {
                    console.log("success");
                }
                else {
                    console.log(token)
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            window.location.href = "/signin";
        }

        try {
            const response = await axios.post("http://127.0.0.1:8000/chat/download", {char: 1})
            $chatHistory = JSON.parse(response.data.chat)
        }
        catch (error) {
            console.log(error)
        }

        // chatHistory.update($chatHistory => {
        //     return $chatHistory
        // })

        console.log($chatHistory)
    })

    const chat = async () => {
        userChat = input

        let history = ""

        get(chatHistory).forEach((chat: ChatHistory) => {
            history = history + (chat.sender + " : " + chat.message)
        })
        userChat = "[StartHistory]" + history + "[EndHistory]" + "\n" + userChat
        console.log(userChat)

        chatHistory.update((state: ChatHistory[]) => {
            return [...state, {
                sender: "user",
                message: input
            }]
        })

        input = ""

        await translate_ko_to_en(userChat, history)

        const client = new Client({
            uri: import.meta.env.CHAR_API_URL
        })

        await client.chat(enInput, {character: charEn, instruction_template: "CharTemplate"}).then(res => {
            answer = res
        })

        await translate_en_to_ko(answer)
    }

    const translate_ko_to_en = async (text: string, history: string) => {
        try {
            const res = await axios.post("http://127.0.0.1:8000/translator/translate", {
                lang: "EN-US",
                text: history
            }) as TranslatorResponse
            const response = await axios.post("http://127.0.0.1:8000/translator/translate", {
                lang: "EN-US",
                text
            }) as TranslatorResponse
            enInput = enInput + "\n\n" + response.data.text
            console.log(enInput)
        } catch (error) {
            console.log(error)
        }
    }

    const translate_en_to_ko = async (text: string) => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/translator/translate", {
                lang: "KO",
                text
            }) as TranslatorResponse
            chatHistory.update((state: ChatHistory[]) => {
                return [...state, {
                    sender: "bot",
                    message: response.data.text
                }]
            })
        } catch (error) {
            console.log(error)
        }
    }

    const charChange = async (charName: string, charNameEn: string) => {
        if (charEn == "Hutao") {
            try {
                const response = await axios.post("http://127.0.0.1:8000/chat/upload", {
                    char: 1,
                    chat: JSON.stringify($chatHistory)
                })
                console.log(response.data.message)
            } catch (error) {
                console.log(error)
            }
        }
        else if (charEn == "Raiden_Shogun") {
            try {
                const response = await axios.post("http://127.0.0.1:8000/chat/upload", {
                    char: 2,
                    chat: JSON.stringify($chatHistory)
                })
                console.log(response.data.message)
            } catch (error) {
                console.log(error)
            }
        }
        else if (charEn == "Gamyu") {
            try {
                const response = await axios.post("http://127.0.0.1:8000/chat/upload", {
                    char: 3,
                    chat: JSON.stringify($chatHistory)
                })
                console.log(response.data.message)
            } catch (error) {
                console.log(error)
            }
        }
        else if (charEn == "Keqing") {
            try {
                const response = await axios.post("http://127.0.0.1:8000/chat/upload", {
                    char: 4,
                    chat: JSON.stringify($chatHistory)
                })
                console.log(response.data.message)
            } catch (error) {
                console.log(error)
            }
        }

        char = charName
        charEn = charNameEn

        $chatHistory = []

        if (charEn == "Hutao") {
            try {
                const response = await axios.post("http://127.0.0.1:8000/chat/download", {char: 1})
                $chatHistory = JSON.parse(response.data.chat)
                console.log($chatHistory)
            } catch (error) {
                console.log(error)
            }
        }
        else if (charEn == "Raiden_Shogun") {
            try {
                const response = await axios.post("http://127.0.0.1:8000/chat/download", {char: 2})
                $chatHistory = JSON.parse(response.data.chat)
                console.log($chatHistory)
            } catch (error) {
                console.log(error)
            }
        }
        else if (charEn == "Gamyu") {
            try {
                const response = await axios.post("http://127.0.0.1:8000/chat/download", {char: 3})
                $chatHistory = JSON.parse(response.data.chat)
                console.log($chatHistory)
            } catch (error) {
                console.log(error)
            }
        }
        else if (charEn == "Keqing") {
            try {
                const response = await axios.post("http://127.0.0.1:8000/chat/download", {char: 4})
                $chatHistory = JSON.parse(response.data.chat)
                console.log($chatHistory)
            } catch (error) {
                console.log(error)
            }
        }

        chatHistory.update($chatHistory => {
            return $chatHistory
        })

        console.log($chatHistory)
    }
</script>

<CharBar>
    <CharBtn on:click={()=>charChange("호두", "Hutao")}>호두</CharBtn>
    <CharBtn on:click={()=>charChange("라이덴 쇼군", "Raiden_Shogun")}>라이덴 쇼군</CharBtn>
    <CharBtn on:click={()=>charChange("감우", "Gamyu")}>감우</CharBtn>
    <CharBtn on:click={()=>charChange("각청", "Keqing")}>각청</CharBtn>
</CharBar>

<div class="main">
    <CharTitle>{char}</CharTitle>
    <ChatContent>
        {#each chatHis as chat}
            <ChatBox state={chat.sender} message={chat.message}/>
        {/each}
    </ChatContent>
    <div>
        <ChatInput bind:input on:keydown={e => {if (e.key === "Enter") chat()}}/>
        <SendBtn on:click={chat}/>
    </div>
</div>

<style>
    .main {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>