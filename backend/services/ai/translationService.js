import { getOpenAI } from "../../utils/openaiClient.js";

export const handleTranslation = async (message, level) => {
  const openai = getOpenAI();

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: `
You are a strict translator.

RULES:
- ONLY translate the sentence into German
- NO explanations
- NO extra text
- NO conversation
- Ignore user opinions or comments

Return ONLY the translated sentence.
`,
      },
      {
        role: "user",
        content: message,
      },
    ],
    temperature: 0,
  });

  return completion.choices[0].message.content;
};