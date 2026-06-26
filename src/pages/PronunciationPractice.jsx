import { useState } from "react";
import { useParams } from "react-router-dom";
import { Mic, Volume2 } from "lucide-react";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import pronunciationSentences from "../data/pronunciationSentences";
import api from "../utils/api";
import toast from "react-hot-toast";
import "../styles/speaking.css";

function PronunciationPractice() {
  const { level } = useParams();
  const sentences = pronunciationSentences[level] || [];

  const [currentIndex, setCurrentIndex]         = useState(0);
  const [showMeaning, setShowMeaning]           = useState(false);
  const [isRecording, setIsRecording]           = useState(false);
  const [isSpeaking, setIsSpeaking]             = useState(false);
  const [recognizedText, setRecognizedText]     = useState("");
  const [feedback, setFeedback]                 = useState(null);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [error, setError]                       = useState("");

  const currentSentence = sentences[currentIndex];

  function resetAttempt() {
    setShowMeaning(false);
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setRecognizedText("");
    setFeedback(null);
    setError("");
  }

  function changeSentence(newIndex) {
    resetAttempt();
    setCurrentIndex(newIndex);
    setSessionCompleted(false);
  }

  function speak(text) {
    if (isRecording) return;
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
      utt.onstart = () => setIsSpeaking(true);
      utt.onend   = () => setIsSpeaking(false);
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
      await api.post("/progress/save", { lessonSlug: `pronunciation-${level}` });
      toast.success("Pronunciation completed!");
    } catch (err) {
      console.error(err);
    }
  };

  function startRecording() {
    setError("");
    setRecognizedText("");
    setFeedback(null);

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
      setRecognizedText(text);

      function normalize(str) {
        return str
          .toLowerCase()
          .replace(/[.,!?;:'"()äöü]/g, (c) => {
            const map = { ä: "ae", ö: "oe", ü: "ue" };
            return map[c] || "";
          })
          .replace(/\s+/g, " ")
          .trim();
      }

      function wordOverlap(a, b) {
        const wa = normalize(a).split(" ");
        const wb = normalize(b).split(" ");
        const hits = wa.filter((w) => wb.includes(w)).length;
        return hits / Math.max(wa.length, wb.length);
      }

      const score = wordOverlap(text, currentSentence.german);
      let feedbackText, feedbackClass;
      if (score >= 0.95) {
        feedbackText  = "Excellent pronunciation";
        feedbackClass = "feedback-excellent";
      } else if (score >= 0.75) {
        feedbackText  = "Good — minor differences";
        feedbackClass = "feedback-good";
      } else if (score >= 0.5) {
        feedbackText  = "Keep practicing";
        feedbackClass = "feedback-fair";
      } else {
        feedbackText  = "Try again";
        feedbackClass = "feedback-poor";
      }

      setFeedback({ text: feedbackText, cls: feedbackClass });

      const isLast = currentIndex === sentences.length - 1;
      if (score >= 0.75 && isLast && !sessionCompleted) {
        setSessionCompleted(true);
        saveProgress();
      }
    };

    recognition.onerror = (event) => {
      setIsRecording(false);
      if (event.error === "no-speech")   setError("We couldn't hear anything.");
      else if (event.error === "not-allowed") setError("Microphone permission denied.");
      else setError("Speech recognition failed.");
    };

    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    recognition.start();
  }

  const feedbackText  = feedback?.text || "";
  const feedbackClass = feedback?.cls || "";

  if (!currentSentence) {
    return (
      <AppLayout>
        <div className="speaking-page">
          <p>No sentences found for this level.</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="speaking-page">
        <PageHeader
          backTo="/speaking/pronunciation"
          backLabel="Pronunciation"
          title={`${level.toUpperCase()} Pronunciation`}
          subtitle="Listen, then speak the sentence aloud."
        />

        <div className="pronun-card">

          {/* Counter */}
          <div className="pronun-counter">
            <span>Sentence {currentIndex + 1}</span>
            <span>of {sentences.length}</span>
          </div>

          {/* Progress bar */}
          <div className="pronun-progress-track">
            <div
              className="pronun-progress-fill"
              style={{ width: `${((currentIndex + 1) / sentences.length) * 100}%` }}
            />
          </div>

          {/* Sentence */}
          <p className="pronun-sentence">{currentSentence.german}</p>

          {/* Meaning (toggle) */}
          {showMeaning && (
            <p className="pronun-meaning">{currentSentence.english}</p>
          )}

          {/* Actions row */}
          <div className="pronun-actions">
            <button
              className="pronun-btn secondary"
              onClick={() => speak(currentSentence.german)}
              disabled={isRecording || isSpeaking}
            >
              <Volume2 size={16} />
              {isSpeaking ? "Playing…" : "Listen"}
            </button>
            <button
              className="pronun-btn ghost"
              onClick={() => setShowMeaning(!showMeaning)}
            >
              {showMeaning ? "Hide meaning" : "Show meaning"}
            </button>
          </div>

          {/* Mic area */}
          <div className="pronun-mic-area">
            <button
              className={`pronun-mic${isRecording ? " recording" : ""}`}
              onClick={startRecording}
              disabled={isRecording || isSpeaking}
              aria-label="Record your pronunciation"
            >
              <Mic size={22} />
            </button>
            <p className="pronun-mic-hint">
              {isRecording ? "Listening…" : "Tap to speak"}
            </p>
          </div>

          {/* Feedback */}
          {recognizedText && (
            <div className="pronun-result">
              <p className="pronun-result-text">"{recognizedText}"</p>
              {feedback && (
                <p className={`pronun-feedback ${feedbackClass}`}>{feedbackText}</p>
              )}
            </div>
          )}

          {error && <p className="pronun-error">{error}</p>}

          {/* Navigation */}
          <div className="pronun-nav">
            <button
              className="pronun-btn secondary"
              onClick={() => changeSentence(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              className="pronun-btn ghost"
              onClick={() => resetAttempt()}
            >
              Try again
            </button>
            <button
              className="pronun-btn primary"
              onClick={() => changeSentence(Math.min(sentences.length - 1, currentIndex + 1))}
              disabled={currentIndex === sentences.length - 1}
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}

export default PronunciationPractice;
