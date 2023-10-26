import { writable } from "svelte/store";

export interface ChatHistory {
    sender: string;
    message: string;
}

export const chatHistory = writable<Array<ChatHistory>>([
    { sender: "bot", message: "Hello" },
]);