import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startSpeechRecognition } from "../utils/speechRecognition";
import { useState, useRef, useEffect } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";
import "../styles/speaking.css";

function TalkWithMia() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "mia", text: "Hallo! Worüber möchtest du heute sprechen?" },
  ]);
  const [isRecording, setIsRecording]   = useState(false);
  const [isMiaTyping, setIsMiaTyping]   = useState(false);
  const [isMiaSpeaking, setIsMiaSpeaking] = useState(false);
  const [miaCompleted, setMiaCompleted] = useState(false);

  const chatEndRef = useRef(null);
  const navigate   = useNavigate();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isMiaTyping, isMiaSpeaking]);

  useEffect(() => {
    speak("Hallo! Worüber möchtest du heute sprechen?");
    return () => speechSynthesis.cancel();
  }, []);

  function speak(text) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.onstart = () => setIsMiaSpeaking(true);
    utterance.onend   = () => setIsMiaSpeaking(false);
    speechSynthesis.speak(utterance);
  }

  const saveMiaProgress = async () => {
    try {
      await api.post("/progress/save", { lessonSlug: "talk-with-mia" });
      toast.success("Conversation completed!");
    } catch (err) {
      console.error(err);
    }
  };

  function handleMicClick() {
    startSpeechRecognition(
      (transcript) => {
        setMessages((prev) => {
          const updated = [...prev, { id: Date.now(), sender: "user", text: transcript }];
          const userCount = updated.filter((m) => m.sender === "user").length;
          if (userCount === 5 && !miaCompleted) {
            setMiaCompleted(true);
            saveMiaProgress();
          }
          return updated;
        });

        setIsMiaTyping(true);

        setTimeout(async () => {
          try {
            const { data } = await api.post("/ai/chat", {
              mode: "talkWithMia",
              message: transcript,
            });
            setIsMiaTyping(false);
            setMessages((prev) => [
              ...prev,
              { id: Date.now() + 1, sender: "mia", text: data.reply },
            ]);
            speak(data.reply);
          } catch {
            setIsMiaTyping(false);
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now() + 1,
                sender: "mia",
                text: "Entschuldigung, ich habe gerade ein Problem.",
              },
            ]);
          }
        }, 1500);
      },
      "de-DE",
      () => setIsRecording(true),
      () => setIsRecording(false)
    );
  }

  const micDisabled = isRecording || isMiaTyping || isMiaSpeaking;

  return (
    <AppLayout>
      <div className="speaking-page talk-page">
        <PageHeader
          backTo="/speaking"
          backLabel="Speaking"
          title="Talk with Mia"
          subtitle="Open conversation in German. Speak naturally."
        />

        <div className="talk-chat-box">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={msg.sender === "mia" ? "mia-chat-message" : "user-chat-message"}
            >
              {msg.sender === "mia" && (
                <div className="chat-speaker">Mia</div>
              )}
              <p>{msg.text}</p>
            </div>
          ))}

          {isMiaTyping && (
            <div className="mia-chat-message">
              <div className="chat-speaker">Mia</div>
              <div className="typing-dots">
                <span /><span /><span />
              </div>
            </div>
          )}

          {isMiaSpeaking && (
            <p className="mia-speaking">🔊 Mia is speaking…</p>
          )}

          <div ref={chatEndRef} />
        </div>

        <div className="mic-area">
          <button
            className={`mic-btn${isRecording ? " recording" : ""}${micDisabled ? " disabled" : ""}`}
            onClick={handleMicClick}
            disabled={micDisabled}
            aria-label={isRecording ? "Recording…" : "Speak to Mia"}
          >
            <Mic size={28} />
          </button>
          <p className="mic-hint">
            {isRecording
              ? "Listening…"
              : micDisabled
              ? "Wait for Mia…"
              : "Tap to speak"}
          </p>
        </div>
      </div>
    </AppLayout>
  );
}

export default TalkWithMia;
