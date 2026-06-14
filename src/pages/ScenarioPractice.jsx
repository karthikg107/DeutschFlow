import { useParams } from "react-router-dom";
import { useState } from "react";
import { Mic } from "lucide-react";

import speakingScenarios from "../data/speakingScenarios";

function ScenarioPractice() {

  const [isRecording, setIsRecording] =
  useState(false);

  const [isMiaSpeaking, setIsMiaSpeaking] =
  useState(false);

const { level } = useParams();

const [selectedScenario, setSelectedScenario] =
  useState(null);

const [transcript, setTranscript] =
  useState("");

const [messages, setMessages] =
  useState([]);

const [conversationStep, setConversationStep] =
  useState(0);  

const scenarios =
  speakingScenarios[level] || [];

  function speak(text) {

  setIsMiaSpeaking(true);

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = "de-DE";

  utterance.onend = () => {
    setIsMiaSpeaking(false);
  };

  speechSynthesis.speak(
    utterance
  );
}

  function startRecording() {

  if (
    isRecording ||
    isMiaSpeaking
  ) {
    return;
  }

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

  recognition.lang = "de-DE";

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.onstart = () => {
    setIsRecording(true);
  };

  recognition.onresult = (event) => {

    const text =
      event.results[
        event.results.length - 1
      ][0].transcript;

    setTranscript(text);

    let miaReply = "";

if (
  selectedScenario?.title ===
  "Introduce Yourself"
) {

  if (
    conversationStep === 0
  ) {
    miaReply =
      "Wie alt bist du?";

    setConversationStep(1);
  }

  else if (
    conversationStep === 1
  ) {
    miaReply =
      "Woher kommst du?";

    setConversationStep(2);
  }

  else if (
    conversationStep === 2
  ) {
    miaReply =
      "Was sind deine Hobbys?";

    setConversationStep(3);
  }

  else {
    miaReply =
      "Sehr gut! Das war eine tolle Vorstellung.";
  }

}

else {

  miaReply =
    "Sehr gut! Lass uns weiter üben.";

}

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text
      },
      {
        sender: "mia",
        text: miaReply
      }
    ]);

    speak(miaReply);
  };

  recognition.onerror = (event) => {

    setIsRecording(false);

    console.log(
      "ERROR:",
      event.error
    );
  };

  recognition.onend = () => {
    setIsRecording(false);
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

                setConversationStep(0);

                const firstMessage =
                  `Hallo! Ich bin Mia. ${scenario.prompt}`;

                setMessages([
                  {
                    sender: "mia",
                    text: firstMessage
                  }
                ]);

                speak(firstMessage);
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

          <div className="chat-box">

            {messages.map(
              (message, index) => (

                <div
                  key={index}
                  className={
                    message.sender === "mia"
                      ? "mia-message"
                      : "user-message"
                  }
                >

                  <strong>
                    {message.sender === "mia"
                      ? "Mia"
                      : "You"}
                    :
                  </strong>

                  <p>
                    {message.text}
                  </p>

                </div>

              )
            )}

          </div>

          <button
  className={`mic-btn ${
    isRecording
      ? "recording"
      : ""
  }`}
  onClick={startRecording}
  disabled={
    isRecording ||
    isMiaSpeaking
  }
>
  <Mic size={28} />
</button>

{isRecording && (
  <p
    style={{
      marginTop: "12px"
    }}
  >
    🎤 Listening...
  </p>
)}

{isMiaSpeaking && (
  <p
    style={{
      marginTop: "12px"
    }}
  >
    🔊 Mia is speaking...
  </p>
)}

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