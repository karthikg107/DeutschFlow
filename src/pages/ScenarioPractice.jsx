import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
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


const [messages, setMessages] =
  useState([]);

const [userAnswers, setUserAnswers] =
  useState([]);  

const messagesEndRef = useRef(null);  

const [conversationStep, setConversationStep] =
  useState(0);

const [isCompleted, setIsCompleted] =
  useState(false);  

const scenarios =
  speakingScenarios[level] || [];

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);  

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

    setUserAnswers((prev) => [
  ...prev,
  text
]);  


    const questions =
  selectedScenario.questions;

const nextStep =
  conversationStep + 1;

let miaReply = "";

if (nextStep < questions.length) {

  miaReply =
    questions[nextStep];

  setConversationStep(
    nextStep
  );

  if (nextStep >= questions.length - 1) {
  setIsCompleted(true);
}

} else {
  return;
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

      {!selectedScenario && (

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


            setConversationStep(0);

            setIsCompleted(false);

            setUserAnswers([]);

            setMessages([]);

            const firstMessage =
              scenario.questions[0];

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

)}



      {selectedScenario && (

        <div className="selected-scenario">

        <button
  className="back-btn"
  onClick={() => {
    
    speechSynthesis.cancel();

    setSelectedScenario(null);

    setMessages([]);

    setConversationStep(0);

    setIsCompleted(false);

    setUserAnswers([]);


  }}

  
>
  ← Back to Scenarios
</button>


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
  Conversation Summary
</h4>

<div className="answers-list">

  <div className="feedback-box">

  <h4>
    Feedback
  </h4>

  <ul>

    <li>
      ✅ You completed the conversation.
    </li>

    <li>
      ✅ You answered all questions.
    </li>

    <li>
      ⚠️ Speech recognition may not always be accurate.
    </li>

    <li>
      💡 Try using complete German sentences.
    </li>

  </ul>

</div>

  {userAnswers.map(
    (answer, index) => (

      <div
        key={index}
        className="answer-item"
      >

        <strong>
          Answer {index + 1}
        </strong>

        <p>
          {answer}
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
            selectedScenario.questions[0];

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

          setSelectedScenario(null);

          setMessages([]);

          setConversationStep(0);

          setIsCompleted(false);

          setUserAnswers([]);

        }}
      >
        Choose Another Scenario
      </button>

    </div>

  </div>

)}

<button
  className={`mic-btn ${
    isRecording
      ? "recording"
      : ""
  }`}
  onClick={startRecording}
  disabled={
    isRecording ||
    isMiaSpeaking ||
    isCompleted
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

          

        </div>

      )}

    </div>

  );
}

export default ScenarioPractice;