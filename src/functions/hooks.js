import { useState } from "react"
import initChatWithGemini from "./gemini";


export const useChatWith = () => {
    const [stream, setStream] = useState("");

    const getResponse = async (prompt = "Où est paris ?") => {
        // const msg = "where is Paris ?";
        const chat = await initChatWithGemini()
        const result = await chat.sendMessageStream(prompt);

        let text = "";
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            console.log(chunkText);
            text += chunkText;
            setStream(text);
        }
    }

    return {
        stream,
        getResponse
    }
}