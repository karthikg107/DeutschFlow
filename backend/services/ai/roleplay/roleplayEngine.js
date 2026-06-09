import { cafeScenario } from "./scenarios/cafe.js";
import { cafePhrases } from "./phraseLibrary/cafePhrases.js";

import {
  getRoleplayMemory,
  updateRoleplayMemory,
} from "./roleplayMemory.js";

// scenarios
const scenarios = {
  cafe: {
    scenario: cafeScenario,
    phrases: cafePhrases,
  },
};

// SIMPLE SPELL CORRECTIONS
const spellingCorrections = {
  cofee: "coffee",
  coffe: "coffee",
  milchh: "milch",
  pleese: "please",
  helllo: "hello",
};

// SPELL CHECK
function correctSpelling(input) {
  const words = input.split(" ");

  let correction = null;

  const correctedWords = words.map((word) => {
    const lower = word.toLowerCase();

    if (spellingCorrections[lower]) {
      correction = {
        wrong: word,
        correct: spellingCorrections[lower],
      };

      return spellingCorrections[lower];
    }

    return word;
  });

  return {
    correctedInput: correctedWords.join(" "),
    correction,
  };
}

// detect intent
function detectIntent(userInput, phrases) {
  const input = userInput.toLowerCase().trim();

  for (const phrase of phrases) {
    for (const intent of phrase.intent) {
      if (input.includes(intent.toLowerCase())) {
        return phrase;
      }
    }
  }

  return null;
}

// MAIN ROLEPLAY
export async function handleRoleplayTurn({
  userInput,
  scenarioId = "cafe",
  level = "A1",
  sessionId,
}) {
  const { scenario, phrases } = scenarios[scenarioId];

  // MEMORY
  let memory = getRoleplayMemory(sessionId) || {
    currentStepIndex: 0,
    greeted: false,
  };

  // SPELL CORRECTION
  const {
    correctedInput,
    correction,
  } = correctSpelling(userInput);

  // CURRENT STEP
  const currentStep =
    scenario.steps[memory.currentStepIndex];

  // DETECT INTENT
  const detectedPhrase =
    detectIntent(correctedInput, phrases);

  // DEBUG
  console.log("========== ROLEPLAY ==========");
  console.log("USER INPUT:", userInput);
  console.log("CORRECTED INPUT:", correctedInput);
  console.log("CURRENT STEP:", currentStep.id);
  console.log("DETECTED:", detectedPhrase);
  console.log("EXPECTED:", currentStep.expectedIntents);

  let nextIndex = memory.currentStepIndex;

  let feedback = null;

  // VALID STEP
  if (
    detectedPhrase &&
    currentStep.expectedIntents.includes(detectedPhrase.id)
  ) {
    nextIndex++;

    feedback = "✅ Great job!";

    console.log("STEP PASSED");
  } else {
    feedback =
      "❌ Try again using a simple German sentence.";

    console.log("STEP FAILED");
  }

  // NEXT STEP
  const nextStep =
    scenario.steps[nextIndex] ||
    scenario.steps.at(-1);

  console.log("NEXT STEP:", nextStep.id);

  // UPDATE MEMORY
  updateRoleplayMemory(sessionId, {
    currentStepIndex: nextIndex,
    greeted: true,
  });

  // FORMAT RESPONSE
  let formattedResponse = "";

  // if phrase detected
  if (detectedPhrase) {
    formattedResponse +=
      `German: ${detectedPhrase.german}\n`;

    formattedResponse +=
      `English: ${detectedPhrase.english}\n\n`;
  }

  // AI ROLEPLAY RESPONSE
  formattedResponse += nextStep.ai;

  return {
    aiResponse: formattedResponse,

    correction,

    hint: detectedPhrase
      ? {
          german: detectedPhrase.german,
          english: detectedPhrase.english,
        }
      : null,

    feedback,
  };
}