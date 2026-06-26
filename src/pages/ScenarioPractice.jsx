import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Mic, CheckCircle } from "lucide-react";
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

  const [messages, setMessages]                 = useState([]);
  const [userAnswers, setUserAnswers]           = useState([]);
  const [conversationStep, setConversationStep] = useState(0);
  const [isCompleted, setIsCompleted]           = useState(false);
  const [isRecording, setIsRecording]           = useState(false);
  const [isMiaSpeaking, setIsMiaSpeaking]       = useState(false);
  const [error, setError]                       = useState("");

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
    window.speechSynthesis.cancel();
    const fire = () => {
      const voices = window.speechSynthesis.getVoices();
      const deVoice =
        voices.find((v) => v.lang === "de-DE") ||
        voices.find((v) => v.lang.startsWith("de"));
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = "de-DE";
      utt.rate = 0.9;
      if (deVoice) utt.voice = deVoice;
      utt.onstart = () => setIsMiaSpeaking(true);
      utt.onend   = () => setIsMiaSpeaking(false);
      window.speechSynthesis.speak(utt);
    };
    if (window.speechSynthesis.getVoices().length > 0) {
      fire();
    } else {
      window.speechSynthesis.addEventListener("voiceschanged", fire, { once: true });
    }
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

  const totalSteps = selectedScenario.questions.length;
  const currentStep = Math.min(conversationStep + 1, totalSteps);
  const progressPct = Math.round((currentStep / totalSteps) * 100);

  return (
    <AppLayout>
      <div className="scenario-page">
        <PageHeader
          backTo="/speaking/scenarios"
          backLabel="Scenarios"
          title={selectedScenario.title}
          subtitle={selectedScenario.description}
        />

        {/* Context card */}
        <div className="scenario-context">
          <p className="scenario-context-prompt">{selectedScenario.prompt}</p>
          <div className="scenario-context-divider" />
          <p className="scenario-context-example">{selectedScenario.example}</p>
        </div>

        {/* Progress */}
        <div className="scenario-progress">
          <span className="scenario-progress-label">
            Step {isCompleted ? totalSteps : currentStep} of {totalSteps}
          </span>
          <div className="scenario-progress-track">
            <div
              className="scenario-progress-fill"
              style={{ width: `${isCompleted ? 100 : progressPct}%` }}
            />
          </div>
        </div>

        {/* Chat */}
        <div className="scenario-chat">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`scenario-bubble-wrap ${msg.sender === "mia" ? "mia" : "user"}`}
            >
              {msg.sender === "mia" && (
                <div className="scenario-avatar">M</div>
              )}
              <div className="scenario-bubble">{msg.text}</div>
            </div>
          ))}

          {isRecording && (
            <div className="scenario-bubble-wrap mia">
              <div className="scenario-avatar">M</div>
              <div className="scenario-bubble scenario-listening">
                <span className="scenario-dot" />
                <span className="scenario-dot" />
                <span className="scenario-dot" />
              </div>
            </div>
          )}

          {error && (
            <p className="scenario-error">{error}</p>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Completed review */}
        {isCompleted && (
          <div className="scenario-complete">
            <div className="scenario-complete-header">
              <CheckCircle size={22} strokeWidth={2} />
              <span>Scenario Complete</span>
            </div>

            <div className="scenario-answers-grid">
              {selectedScenario.questions.map((item, i) => (
                <div key={i} className="scenario-answer-row">
                  <p className="scenario-answer-q">{item.question}</p>
                  <div className="scenario-answer-cols">
                    <div className="scenario-answer-col">
                      <span className="scenario-col-label">Your answer</span>
                      <p>{userAnswers[i] || "—"}</p>
                    </div>
                    <div className="scenario-answer-col">
                      <span className="scenario-col-label suggested">Suggested</span>
                      <p>{item.sampleAnswer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="scenario-complete-actions">
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
                All Scenarios
              </button>
            </div>
          </div>
        )}

        {/* Fixed mic bar */}
        {!isCompleted && (
          <div className="scenario-mic-bar">
            <button
              className={`mic-btn${isRecording ? " recording" : ""}${(isRecording || isMiaSpeaking) ? " disabled" : ""}`}
              onClick={startRecording}
              disabled={isRecording || isMiaSpeaking}
              aria-label="Speak your answer"
            >
              <Mic size={28} />
            </button>
            <p className="mic-hint">
              {isRecording
                ? "Listening…"
                : isMiaSpeaking
                ? "Mia is speaking…"
                : "Tap to answer"}
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default ScenarioPractice;
