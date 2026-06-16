import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Mic } from "lucide-react";

import speakingScenarios from "../data/speakingScenarios";
import AppLayout from "../components/layout/AppLayout";
import { useNavigate } from "react-router-dom";


function ScenarioPractice() {

  const [isRecording, setIsRecording] =
  useState(false);

  const [isMiaSpeaking, setIsMiaSpeaking] =
  useState(false);

const { level, id } = useParams();

const selectedScenario =
  speakingScenarios[level]?.find(
    (scenario) =>
      scenario.id === Number(id)
  );

  if (!selectedScenario) {
  return (
    <AppLayout>
      <div className="speaking-page">
        <h1>Scenario not found</h1>
      </div>
    </AppLayout>
  );
}


const [messages, setMessages] =
  useState([]);

const [userAnswers, setUserAnswers] =
  useState([]);  

const messagesEndRef = useRef(null);  

const [conversationStep, setConversationStep] =
  useState(0);

const [isCompleted, setIsCompleted] =
  useState(false);

const [error, setError] =
  useState("");  

const navigate = useNavigate();  

const initializedRef = useRef(false);


useEffect(() => {

  if (!selectedScenario) return;

  if (initializedRef.current) return;

  initializedRef.current = true;

  const firstMessage =
    selectedScenario.questions[0].question;

  setMessages([
    {
      sender: "mia",
      text: firstMessage
    }
  ]);

  speak(firstMessage);

}, [selectedScenario]);

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

    setError("");

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

    setUserAnswers((prev) => [
  ...prev,
  text
]);  


    const questions =
  selectedScenario.questions;

const nextStep =
  conversationStep + 1;

let miaReply = "";

if (
  nextStep < questions.length
) {

  miaReply =
    questions[nextStep]
      .question;

  setConversationStep(
    nextStep
  );

} else {

  miaReply =
    selectedScenario
      .completionMessage;

  setIsCompleted(true);

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

  if (
    event.error === "no-speech"
  ) {
    setError(
      "We couldn't hear anything. Please try again."
    );
  }

  else if (
    event.error === "audio-capture"
  ) {
    setError(
      "Microphone not detected."
    );
  }

  else if (
    event.error === "not-allowed"
  ) {
    setError(
      "Microphone permission denied."
    );
  }

  else {
    setError(
      "Speech recognition failed."
    );
  }

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

    <AppLayout>

    <div className="speaking-page">

      <h1>
  {selectedScenario?.title}
</h1>

<p>
  Complete the speaking conversation below.
</p>


      {selectedScenario && (

        <div className="selected-scenario">

        <button
  className="back-btn"
  onClick={() => {

  speechSynthesis.cancel();

  navigate("/speaking/scenarios");

}}

  
>
  ← Back to Scenarios
</button>



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

            <div ref={messagesEndRef}></div>

          </div>
            
          {isCompleted && (

  <div className="completion-box">

    <h3>
      ✅ Scenario Completed
    </h3>

    <p>
      You completed:
      {" "}
      {selectedScenario.title}
    </p>

    <h4>
  Suggested Answers
</h4>

<div className="answers-list">

  {selectedScenario.questions.map(
    (item, index) => (

      <div
        key={index}
        className="answer-item"
      >

        <strong>
          Question
        </strong>

        <p>
          {item.question}
        </p>

        <strong>
          Your Answer
        </strong>

        <p>
          {
            userAnswers[index] ||
            "No answer"
          }
        </p>

        <strong>
          Suggested Answer
        </strong>

        <p>
          {item.sampleAnswer}
        </p>

      </div>

    )
  )}

</div>

    <div className="completion-actions">

      <button
        className="completion-btn"
        onClick={() => {

          setConversationStep(0);

          setIsCompleted(false);


          speechSynthesis.cancel();

          setUserAnswers([]);

          setMessages([]);

          const firstMessage =
            selectedScenario.questions[0].question;

          setMessages([
            {
              sender: "mia",
              text: firstMessage
            }
          ]);

          speak(firstMessage);

        }}
      >
        Try Again
      </button>

      <button
        className="completion-btn"
        onClick={() => {

  speechSynthesis.cancel();

  navigate("/speaking/scenarios");

}}
      >
        Choose Another Scenario
      </button>

    </div>

  </div>

)}

{!isCompleted && (

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

)}

{isRecording && (
  <p
    style={{
      marginTop: "12px"
    }}
  >
    🎤 Listening...
  </p>
)}

{error && (
  <p
    style={{
      marginTop: "12px",
      color: "#ef4444",
      fontWeight: "600"
    }}
  >
    {error}
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

          

        </div>

      )}

    </div>

    </AppLayout>

  );
}

export default ScenarioPractice;