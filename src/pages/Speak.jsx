import { useState } from "react";
import { Link } from "react-router-dom";

function Speak() {
  const [spokenText, setSpokenText] =
    useState("");

  const [result, setResult] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  function startMic() {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech recognition not supported."
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "de-DE";
    recognition.start();

    recognition.onresult = (event) => {
      const text =
        event.results[0][0].transcript;

      setSpokenText(text);
    };
  }

  async function checkGerman() {
    if (!spokenText.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            model:
              "openai/gpt-oss-120b:free",
            messages: [
              {
                role: "system",
                content:
                "You are a German tutor. Reply in plain text only using format: Correct: ... Meaning: ... Tip: ... No markdown symbols."
              },
              {
                role: "user",
                content: spokenText
              }
            ]
          })
        }
      );

      const data = await response.json();

      setResult(
        data.choices[0].message.content
      );
    } catch {
      setResult("Connection issue.");
    }

    setLoading(false);
  }

  return (
    <div className="page">
      <h1>Speak German</h1>

      <button onClick={startMic}>
        🎤 Start Speaking
      </button>

      <div className="speechBox">
        {spokenText ||
          "Your spoken text will appear here"}
      </div>

      <button onClick={checkGerman}>
        {loading
          ? "Checking..."
          : "Check German"}
      </button>

      {result && (
        <div className="speechResult">
          {result}
        </div>
      )}

      <br />
      <br />

      <Link to="/">⬅ Back Home</Link>
    </div>
  );
}

export default Speak;