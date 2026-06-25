import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Mic } from "lucide-react";
import speakingScenarios from "../data/speakingScenarios";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import api from "../utils/api";
import toast from "react-hot-toast";
import "../styles/speaking.css";

function ScenarioPractice() {
  const { level, id }    = useParams();
  const navigate         = useNavigate();
  const messagesEndRef   = useRef(null);
  const initializedRef   = useRef(false);

  const selectedScenario = speakingScenarios[level]?.find(
    (s) => s.id === Number(id)
  );

  const [messages, setMessages]               = useState([]);
  const [userAnswers, setUserAnswers]         = useState([]);
  const [conversationStep, setConversationStep] = useState(0);
  const [isCompleted, setIsCompleted]         = useState(false);
  const [isRecording, setIsRecording]         = useState(false);
  const [isMiaSpeaking, setIsMiaSpeaking]     = useState(false);
  const [error, setError]                     = useState("");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!selectedScenario || initializedRef.current) return;
    initializedRef.current = true;
    const firstMsg = selectedScenario.questions[0].question;
    setMessages([{ sender: "mia", text: firstMsg }]);
    speak(firstMsg);
  }, [selectedScenario]);

  function speak(text) {
    setIsMiaSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.onend = () => setIsMiaSpeaking(false);
    speechSynthesis.speak(utterance);
  }

  const saveProgress = async () => {
    try {
      await api.post("/progress/save", {
        lessonSlug: `scenario-${level}-${id}`,
      });
      toast.success("Scenario completed!");
    } catch (err) {
      console.error(err);
    }
  };

  function startRecording() {
    setError("");
    if (isRecording || isMiaSpeaking) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "de-DE";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    recognition.onend   = () => setIsRecording(false);

    recognition.onresult = (event) => {
      const text = event.results[event.results.length - 1][0].transcript;
      setUserAnswers((prev) => [...prev, text]);

      const questions = selectedScenario.questions;
      const nextStep  = conversationStep + 1;
      let miaReply;

      if (nextStep < questions.length) {
        miaReply = questions[nextStep].question;
        setConversationStep(nextStep);
      } else {
        miaReply = selectedScenario.completionMessage;
        setIsCompleted(true);
        saveProgress();
      }

      setMessages((prev) => [
        ...prev,
        { sender: "user", text },
        { sender: "mia", text: miaReply },
      ]);
      speak(miaReply);
    };

    recognition.onerror = (event) => {
      setIsRecording(false);
      if (event.error === "no-speech")
        setError("We couldn't hear anything. Please try again.");
      else if (event.error === "audio-capture")
        setError("Microphone not detected.");
      else if (event.error === "not-allowed")
        setError("Microphone permission denied.");
      else
        setError("Speech recognition failed.");
    };

    recognition.start();
  }

  function handleTryAgain() {
    setConversationStep(0);
    setIsCompleted(false);
    setUserAnswers([]);
    speechSynthesis.cancel();
    const firstMsg = selectedScenario.questions[0].question;
    setMessages([{ sender: "mia", text: firstMsg }]);
    speak(firstMsg);
  }

  if (!selectedScenario) {
    return (
      <AppLayout>
        <div className="speaking-page">
          <h1>Scenario not found</h1>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="speaking-page">
        <PageHeader
          backTo="/speaking/scenarios"
          backLabel="Scenarios"
          title={selectedScenario?.title || "Scenario"}
          subtitle={selectedScenario?.description || ""}
        />

        <div className="selected-scenario">

          <p><strong>Prompt:</strong></p>
          <p>{selectedScenario.prompt}</p>

          <h3>Example Answer</h3>
          <p>{selectedScenario.example}</p>

          {/* Chat history */}
          <div className="chat-box">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.sender === "mia" ? "mia-message" : "user-message"}
              >
                <strong>{msg.sender === "mia" ? "Mia" : "You"}:</strong>
                <p>{msg.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Completed state */}
          {isCompleted && (
            <div className="completion-box">
              <h3>✅ Scenario Completed</h3>
              <p>You completed: {selectedScenario.title}</p>

              <h4>Suggested Answers</h4>
              <div className="answers-list">
                {selectedScenario.questions.map((item, i) => (
                  <div key={i} className="answer-item">
                    <strong>Question</strong>
                    <p>{item.question}</p>
                    <strong>Your Answer</strong>
                    <p>{userAnswers[i] || "No answer"}</p>
                    <strong>Suggested Answer</strong>
                    <p>{item.sampleAnswer}</p>
                  </div>
                ))}
              </div>

              <div className="completion-actions">
                <button className="completion-btn" onClick={handleTryAgain}>
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

          {/* Mic */}
          {!isCompleted && (
            <button
              className={`mic-btn${isRecording ? " recording" : ""}`}
              onClick={startRecording}
              disabled={isRecording || isMiaSpeaking}
              aria-label="Speak your answer"
            >
              <Mic size={28} />
            </button>
          )}

          {isRecording && <p style={{ marginTop: 12 }}>🎤 Listening…</p>}

          {error && (
            <p style={{ marginTop: 12, color: "var(--color-red-light)", fontWeight: 600 }}>
              {error}
            </p>
          )}

          {isMiaSpeaking && (
            <p style={{ marginTop: 12 }}>🔊 Mia is speaking…</p>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

export default ScenarioPractice;
