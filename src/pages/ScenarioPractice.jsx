import { useParams } from "react-router-dom";
import { useState } from "react";
import { Mic } from "lucide-react";

import speakingScenarios from "../data/speakingScenarios";

function ScenarioPractice() {

  const { level } = useParams();

  const [selectedScenario, setSelectedScenario] =
    useState(null);

  const [transcript, setTranscript] =
    useState("");

  const scenarios =
    speakingScenarios[level] || [];

  function startRecording() {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert(
      "Speech recognition is not supported."
    );
    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-US";

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.onstart = () => {
    console.log("started");
  };

  recognition.onresult = (event) => {

    const text =
      event.results[0][0].transcript;

    console.log(
      "RESULT:",
      text
    );

    setTranscript(text);
  };

  recognition.onerror = (event) => {
    console.log(
      "ERROR:",
      event.error
    );
  };

  recognition.onend = () => {
    console.log("ended");
  };

  recognition.start();
}

  return (

    <div className="page">

      <h1>
        {level.toUpperCase()} Scenarios
      </h1>

      <p>
        Choose a scenario and start practicing.
      </p>

      <div className="speaking-grid">

        {scenarios.map((scenario) => (

          <div
            key={scenario.id}
            className="speaking-card"
          >

            <h3>
              {scenario.title}
            </h3>

            <p>
              {scenario.description}
            </p>

            <button
              className="start-btn"
              onClick={() => {

                setSelectedScenario(
                  scenario
                );

                setTranscript("");
              }}
            >
              Start Practice
            </button>

          </div>

        ))}

      </div>

      {selectedScenario && (

        <div className="selected-scenario">

          <h2>
            {selectedScenario.title}
          </h2>

          <p>
            <strong>Prompt:</strong>
          </p>

          <p>
            {selectedScenario.prompt}
          </p>

          <h3>
            Example Answer
          </h3>

          <p>
            {selectedScenario.example}
          </p>

          <button
            className="mic-btn"
            onClick={startRecording}
          >
            <Mic size={28} />
          </button>

          {transcript && (

            <div
              className="transcript-box"
            >

              <h3>
                Your Transcript
              </h3>

              <p>
                {transcript}
              </p>

            </div>

          )}

        </div>

      )}

    </div>

  );
}

export default ScenarioPractice;