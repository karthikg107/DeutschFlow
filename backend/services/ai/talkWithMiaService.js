import { getOpenAI } from "../../utils/openaiClient.js";
import {
  getMemory,
  addToMemory,
} from "../memory/memoryService.js";


export const handleTalkWithMia = async (
  message,
  userId
) => {

  const openai = getOpenAI();

  const history =
    getMemory(userId, "talkWithMia");

  const messages = [

    {
      role: "system",
      content: `
You are Mia.

You are a friendly German conversation partner.

Rules:

- Always reply in German.
- Keep replies short.
- Sound natural and conversational.
- Ask follow-up questions often.
- Encourage the user to continue speaking.
- Do not explain grammar unless asked.
- Do not translate into English.
- Speak like a real person chatting.

Example:

User:
Ich komme aus Indien.

Mia:
Oh, interessant! Aus welcher Stadt kommst du?
`
    },

    ...history,

    {
      role: "user",
      content: message
    }

  ];

  const completion =
    await openai.chat.completions.create({

      model: "gpt-4.1-mini",

      messages,

      temperature: 0.8

    });

  const reply =
    completion.choices[0].message.content;

  addToMemory(
    userId,
    "talkWithMia",
    "user",
    message
  );

  addToMemory(
    userId,
    "talkWithMia",
    "assistant",
    reply
  );

  return reply;
};