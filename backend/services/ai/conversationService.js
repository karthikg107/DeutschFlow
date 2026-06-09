import { getMemory, addToMemory } from "../memory/memoryService.js";
import { getOpenAI } from "../../utils/openaiClient.js";
import { conversationPrompt } from "../../prompts/conversationPrompt.js";

export const handleConversation = async (message, userId, level) => {
  const openai = getOpenAI();

  const history = getMemory(userId, "conversation");

  const messages = [
    {
      role: "system",
      content: conversationPrompt(level),
    },
    ...history,
    {
      role: "user",
      content: message,
    },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages,
    temperature: 0.5,
  });

  let reply = completion.choices[0].message.content;

  // ✅ FIXED FORMAT LOGIC
  if (level !== "B1") {
    const parts = reply.split(/German:|English:/).filter(Boolean);

    let formatted = "";

    for (let i = 0; i < parts.length; i += 2) {
      const german = parts[i]?.trim();
      const english = parts[i + 1]?.trim();

      if (german) {
        formatted += `German: ${german}\n`;
      }

      if (english) {
        formatted += `English: ${english}\n\n`;
      }
    }

    reply = formatted.trim();
  }

  // 🧠 save memory AFTER formatting
  addToMemory(userId, "conversation", "user", message);
  addToMemory(userId, "conversation", "assistant", reply);

  return reply;
};