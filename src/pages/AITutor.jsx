import { useState, useEffect, useRef } from "react";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import "../styles/ai.css";
import api from "../utils/api";

const MODES = [
  { id: "conversation", label: "Chat" },
  { id: "correction",   label: "Correct" },
  { id: "translation",  label: "Translate" },
];

const MODE_INTROS = {
  conversation: "Conversation mode — let's chat in German.",
  correction:   "Correction mode — send a German sentence to fix.",
  translation:  "Translation mode — translate English to German.",
};

function AITutor() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hallo! Wie kann ich dir helfen?" },
  ]);
  const [input, setInput]     = useState("");
  const [mode, setMode]       = useState("conversation");
  const [level, setLevel]     = useState("A1");
  const [loading, setLoading] = useState(false);
  const chatEndRef            = useRef(null);

  useEffect(() => {
    const el = document.querySelector(".dashboard-content");
    el?.classList.add("chat-page-active");
    return () => el?.classList.remove("chat-page-active");
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

  useEffect(() => {
    setMessages([{ role: "ai", text: MODE_INTROS[mode] }]);
  }, [mode]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);
    try {
      const { data } = await api.post("/ai/chat", { message: text, mode, level });
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply, correction: data.correction || null },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Error connecting to AI. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const renderLine = (line, i) => {
    if (!line.trim()) return <div key={i} className="spacer" />;
    if (line.startsWith("German:"))
      return (
        <div key={i} className="german">
          {line.replace("German:", "").trim()}
        </div>
      );
    if (line.startsWith("English:"))
      return (
        <div key={i} className="english">
          <strong>ENG:</strong> {line.replace("English:", "").trim()}
        </div>
      );
    return <div key={i}>{line}</div>;
  };

  return (
    <AppLayout>
      <div className="ai-page">
        <div className="ai-page-header">
          <PageHeader
            title="AI Tutor"
            subtitle="Chat, translate, and get corrections in German."
          />
        </div>

        <div className="ai-tutor-card">
          {/* ── Header ── */}
          <div className="ai-header">
            <div className="ai-controls">
              <div className="ai-tabs" role="tablist">
                {MODES.map((m) => (
                  <button
                    key={m.id}
                    role="tab"
                    aria-selected={mode === m.id}
                    className={`ai-tab${mode === m.id ? " active" : ""}`}
                    onClick={() => setMode(m.id)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <select
                className="ai-level-select"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                aria-label="Language level"
              >
                {["A1", "A2", "B1"].map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>
          </div>

          {/* ── Chat messages ── */}
          <div className="chat-box">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-row ${msg.role === "user" ? "right" : "left"}`}
              >
                <div className={`chat-bubble ${msg.role === "user" ? "user" : "ai"}`}>
                  {msg.correction && (
                    <div className="correction-box">
                      <p className="wrong-word">{msg.correction.wrong}</p>
                      <p className="correct-word">{msg.correction.correct}</p>
                    </div>
                  )}
                  <div className="formatted-text">
                    {msg.text?.split("\n").map(renderLine)}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="chat-row left">
                <div className="chat-bubble ai">
                  <span className="ai-typing">
                    <span /><span /><span />
                  </span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* ── Input ── */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type in German…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default AITutor;
