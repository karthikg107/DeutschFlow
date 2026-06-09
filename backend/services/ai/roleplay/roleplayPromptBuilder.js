export function buildRoleplayPrompt({ role, step, userInput, level }) {
  const isBeginner = level === "A1" || level === "A2";

  return `
You are a ${role} in a cafe.

Rules:
- Stay in character
- Do not act like a teacher
- Do not explain grammar
- If user makes mistake, correct naturally
- Continue the conversation

Current situation:
${step.aiIntent}

User said:
"${userInput}"

${
  isBeginner
    ? "Respond in German + English (simple sentences)."
    : "Respond only in German."
}
`;
}