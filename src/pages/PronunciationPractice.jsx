import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import pronunciationSentences from "../data/pronunciationSentences";
import { Mic } from "lucide-react";
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
  const [feedback, setFeedback]                 = useState("");
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [error, setError]                       = useState("");

  const currentSentence = sentences[currentIndex];

  function resetAttempt() {
    setShowMeaning(false);
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setRecognizedText("");
    setFeedback("");
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
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
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
    setFeedback("");

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

      const normalize = (s) =>
        s.toLowerCase().replace(/[.,?!]/g, "").trim();

      const targetWords = normalize(currentSentence.german).split(" ");
      const userWords   = normalize(text).split(" ");
      const matched     = targetWords.filter((w) => userWords.includes(w)).length;
      const ratio       = matched / targetWords.length;

      const isLast = currentIndex === sentences.length - 1;

      if (ratio >= 0.9) {
        setFeedback("Excellent");
        if (isLast && !sessionCompleted) { setSessionCompleted(true); saveProgress(); }
      } else if (ratio >= 0.6) {
        setFeedback("Good");
        if (isLast && !sessionCompleted) { setSessionCompleted(true); saveProgress(); }
      } else {
        setFeedback("Try Again");
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
        <Link to="/speaking/pronunciation" className="back-btn">← Back</Link>

        <div className="speaking-hero">
          <h1>{level.toUpperCase()} Pronunciation Practice</h1>
          <p>Listen to German sentences and practice speaking them aloud.</p>
        </div>

        {/* Sentence card */}
        <div className="speaking-card pronunciation-card">
          <p className="sentence-counter">
            Sentence {currentIndex + 1} of {sentences.length}
          </p>

          {!showMeaning ? (
            <>
              <h2 className="german-sentence">{currentSentence.german}</h2>
              <div className="pronunciation-actions">
                <button
                  className="activity-btn"
                  onClick={() => speak(currentSentence.german)}
                  disabled={isRecording}
                >
                  🔊 Listen
                </button>
                <button
                  className="activity-btn"
                  onClick={() => {
                    window.speechSynthesis.cancel();
                    setIsSpeaking(false);
                    setShowMeaning(true);
                  }}
                >
                  Meaning
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="german-sentence">{currentSentence.english}</h2>
              <div className="pronunciation-actions">
                <button
                  className="activity-btn"
                  onClick={() => {
                    window.speechSynthesis.cancel();
                    setIsSpeaking(false);
                    setShowMeaning(false);
                  }}
                >
                  Original
                </button>
              </div>
            </>
          )}
        </div>

        {/* Practice section */}
        <div className="selected-scenario">
          <h3>Practice Speaking</h3>
          <p>Press the microphone and repeat the sentence.</p>

          <button
            className={`mic-btn${isRecording ? " recording" : ""}`}
            onClick={startRecording}
            disabled={isRecording || isSpeaking}
            aria-label="Record pronunciation"
          >
            <Mic size={28} />
          </button>

          {isRecording && <p style={{ marginTop: 12 }}>🎤 Listening…</p>}

          {error && (
            <p style={{ marginTop: 12, color: "var(--color-red-light)", fontWeight: 600 }}>
              {error}
            </p>
          )}

          {recognizedText && (
            <div className="recognized-section">
              <h4>Recognized Speech</h4>
              <div className="recognized-card">
                <p>{recognizedText}</p>
              </div>
            </div>
          )}

          {feedback && (
            <div className="pronunciation-feedback">
              <p>{feedback}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="completion-actions">
          <button
            className="completion-btn"
            disabled={currentIndex === 0}
            onClick={() => changeSentence(currentIndex - 1)}
          >
            Previous
          </button>
          <button className="completion-btn" onClick={resetAttempt}>
            Try Again
          </button>
          <button
            className="completion-btn"
            disabled={currentIndex === sentences.length - 1}
            onClick={() => changeSentence(currentIndex + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

export default PronunciationPractice;
