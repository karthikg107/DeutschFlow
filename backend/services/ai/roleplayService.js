import { handleRoleplayTurn } from "./roleplay/roleplayEngine.js";

export async function roleplayService(req, res) {
  try {
    const {
      userInput,
      scenarioId,
      level,
      sessionId,
    } = req.body;

    // ROLEPLAY ENGINE
    const result = await handleRoleplayTurn({
      userInput,
      scenarioId,
      level,
      sessionId,
    });

    // NORMALIZED RESPONSE
    res.json({
      success: true,

      // frontend expects "reply"
      reply: result.aiResponse,

      // correction object
      correction: result.correction || null,

      // hint object
      hint: result.hint || null,

      // feedback text
      feedback: result.feedback || null,
    });

  } catch (err) {
    console.error("ROLEPLAY ERROR:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}