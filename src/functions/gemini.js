const { GoogleGenerativeAI } = require("@google/generative-ai");
// const { GEMINI_API_KEY } = require("./config.env");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// For text-only input, use the gemini-pro model
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function initChatWithGemini() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "Hello, I have 2 dogs in my house." }],
            },
            {
                role: "model",
                parts: [{ text: "Great to meet you. What would you like to know?" }],
            },
        ],
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    return chat;

}

export const getResponse = async (prompt = "Génère moi un poème d'amour") => {
    // const msg = "where is Paris ?";
    const chat = await initChatWithGemini()
    const result = await chat.sendMessageStream(prompt);

    let text = "";
    for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        console.log(chunkText);
        text += chunkText;
    }

    return text;
}

export default initChatWithGemini
