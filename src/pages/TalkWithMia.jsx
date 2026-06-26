import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startSpeechRecognition } from "../utils/speechRecognition";
import { useState, useRef, useEffect } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";
import "../styles/speaking.css";

const MIA_TARGET = 5;

function TalkWithMia() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "mia", text: "Hallo! Worüber möchtest du heute sprechen?" },
  ]);
  const [isRecording, setIsRecording]   = useState(false);
  const [isMiaTyping, setIsMiaTyping]   = useState(false);
  const [isMiaSpeaking, setIsMiaSpeaking] = useState(false);
  const [miaCompleted, setMiaCompleted] = useState(false);

  const chatEndRef   = useRef(null);
  const isMountedRef = useRef(false);
  const navigate     = useNavigate();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isMiaTyping, isMiaSpeaking]);

  useEffect(() => {
    isMountedRef.current = true;
    window.speechSynthesis.cancel();

    const timer = setTimeout(() => {
      if (isMountedRef.current) {
        speak("Hallo! Worüber möchtest du heute sprechen?");
      }
    }, 300);

    return () => {
      isMountedRef.current = false;
      clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, []);

  function speak(text) {
    if (!isMountedRef.current) return;
    window.speechSynthesis.cancel();

    let hasFired = false;

    const fire = () => {
      if (hasFired || !isMountedRef.current) return;
      hasFired = true;

      const voices = window.speechSynthesis.getVoices();
      const deVoice =
        voices.find((v) => v.lang === "de-DE") ||
        voices.find((v) => v.lang.startsWith("de"));

      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = "de-DE";
      utt.rate = 0.9;
      if (deVoice) utt.voice = deVoice;
      utt.onstart = () => { if (isMountedRef.current) setIsMiaSpeaking(true); };
      utt.onend   = () => { if (isMountedRef.current) setIsMiaSpeaking(false); };
      window.speechSynthesis.speak(utt);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
      fire();
    } else {
      window.speechSynthesis.addEventListener("voiceschanged", fire, { once: true });
    }
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
          if (userCount >= MIA_TARGET && !miaCompleted) {
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

  const userCount = messages.filter((m) => m.sender === "user").length;
  const miaPct = Math.min(Math.round((userCount / MIA_TARGET) * 100), 100);

  return (
    <AppLayout fixedHeight>
      <div className="speaking-page talk-page">
        <PageHeader
          backTo="/speaking"
          backLabel="Speaking"
          title="Talk with Mia"
          subtitle="Open conversation in German. Speak naturally."
        />

        <div className="mia-progress-wrap">
          <div className="mia-progress-header">
            <span className="mia-progress-label">
              {userCount < MIA_TARGET
                ? `${userCount} of ${MIA_TARGET} exchanges`
                : "Session complete"}
            </span>
            <span className="mia-progress-pct">{miaPct}%</span>
          </div>
          <div className="mia-progress-track">
            <div
              className="mia-progress-fill"
              style={{ width: `${miaPct}%` }}
            />
          </div>
        </div>

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
            <p className="mia-speaking">Mia is speaking…</p>
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
