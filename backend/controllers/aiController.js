import { getOpenAI } from "./../utils/openaiClient.js";

import { handleConversation } from "../services/ai/conversationService.js";
import { handleTranslation } from "../services/ai/translationService.js";
import { handleRoleplayTurn } from "../services/ai/roleplay/roleplayEngine.js";

import {
  getMemory,
  addToMemory,
  resetMemoryIfNeeded,
} from "../services/memory/memoryService.js";

export const handleMessage = async (req, res) => {
  try {
    const { message, mode, level } = req.body;

    const userId = "default-user";

    // Reset memory when mode/level changes
    resetMemoryIfNeeded(userId, mode, level);

    // 🗣️ Conversation
    if (mode === "conversation") {
      const reply = await handleConversation(message, userId, level);
      return res.json({ reply });
    }

    // 🔄 Translation
    if (mode === "translation") {
      const reply = await handleTranslation(message, level);
      return res.json({ reply });
    }

    // 🎭 Roleplay (your new system)
    if (mode === "roleplay") {
  const result = await handleRoleplayTurn({
    userInput: message,
    level
  });

  return res.json({
    reply: result.aiResponse
  });
}

    // ✍️ Correction (fallback to OpenAI)
    if (mode === "correction") {
      const openai = getOpenAI();
      const chatHistory = getMemory(userId, mode);

      const systemPrompt = `
You are a German tutor.

Task:
- Correct the sentence
- Explain simply
- Give one example

Format:
Correct: ...
Why: ...
Example: ...
`;

      addToMemory(userId, mode, "user", message);

      const completion = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...chatHistory,
        ],
        temperature: 0.5,
      });

      const reply =
        completion.choices?.[0]?.message?.content ||
        "Error generating response";

      addToMemory(userId, mode, "assistant", reply);

      return res.json({ reply });
    }

    // ❗ fallback safety
    return res.status(400).json({ error: "Invalid mode" });

  } catch (error) {
    console.error("❌ CONTROLLER ERROR:");
    console.error(error);
    console.error(error.stack);

    res.status(500).json({
      error: error.message || "Internal server error",
    });
  }
};