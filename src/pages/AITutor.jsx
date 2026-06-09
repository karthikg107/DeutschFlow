import {
  useState,
  useEffect,
  useRef,
} from "react";

import AppLayout from "../components/layout/AppLayout";

import "../styles/dashboard.css";

import api from "../utils/api";

function AITutor() {

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "🗣️ Hallo! Wie kann ich dir helfen?",
    },
  ]);

  const [input, setInput] =
    useState("");

  const [mode, setMode] =
    useState("conversation");

  const [level, setLevel] =
    useState("A1");

  const [showDropdown, setShowDropdown] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const chatEndRef = useRef(null);

  const dropdownRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {

    function handleClickOutside(e) {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          e.target
        )
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // MODE INTRO
  useEffect(() => {

    let introMessage = "";

    if (mode === "conversation") {
      introMessage =
        "🗣️ Conversation mode: Let's chat in German!";
    }

    if (mode === "correction") {
      introMessage =
        "✍️ Correction mode: Send a German sentence to fix.";
    }

    if (mode === "translation") {
      introMessage =
        "🔄 Translation mode: Translate English to German.";
    }

    setMessages([
      {
        role: "ai",
        text: introMessage,
      },
    ]);

  }, [mode]);

  // SEND MESSAGE
  const sendMessage = async () => {

    if (!input.trim() || loading)
      return;

    const currentInput =
      input.trim();

    const userMsg = {
      role: "user",
      text: currentInput,
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
    ]);

    setInput("");

    setLoading(true);

        try {

      const res = await api.post(
        "/ai/chat",
        {
          message: currentInput,
          mode,
          level,
        }
      );

      const data = res.data;

      const aiMsg = {
        role: "ai",
        text: data.reply,
        correction:
          data.correction || null,
      };

      setMessages((prev) => [
        ...prev,
        aiMsg,
      ]);

    } catch (error) {

      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "❌ Error connecting to AI",
        },
      ]);

    } finally {

      setLoading(false);

      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

    }
  };

  return (
    <AppLayout>

      <div className="elite-dashboard ai-page">

        <div className="section-card ai-tutor-card">

          {/* HEADER */}
          <h2 className="ai-title">
            🧠 AI German Tutor
          </h2>

          {/* CONTROLS */}
          <div className="top-controls">

            {/* MODES */}
            <div className="mode-selector">

              {[
                "conversation",
                "correction",
                "translation",
              ].map((m) => (

                <button
                  key={m}
                  className={`mode-btn ${
                    mode === m
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setMode(m)
                  }
                >
                  {m}
                </button>

              ))}

            </div>

            {/* LEVEL */}
            <div
              className="level-dropdown"
              ref={dropdownRef}
            >

              <div
                className="level-selected"
                onClick={() =>
                  setShowDropdown(
                    !showDropdown
                  )
                }
              >
                {level} ▼
              </div>

              {showDropdown && (

                <div className="level-menu">

                  {[
                    "A1",
                    "A2",
                    "B1",
                  ].map((lvl) => (

                    <div
                      key={lvl}
                      className="level-item"
                      onClick={() => {

                        setLevel(lvl);

                        setShowDropdown(
                          false
                        );
                      }}
                    >
                      {lvl}
                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

          {/* CHAT */}
          <div className="chat-box">

            {messages.map(
              (msg, index) => (

                <div
                  key={index}
                  className={`chat-row ${
                    msg.role === "user"
                      ? "right"
                      : "left"
                  }`}
                >

                  <div
                    className={`chat-bubble ${
                      msg.role === "user"
                        ? "user"
                        : "ai"
                    }`}
                  >

                    {/* CORRECTION */}
                    {msg.correction && (

                      <div className="correction-box">

                        <p className="wrong-word">
                          ❌{" "}
                          {
                            msg.correction
                              .wrong
                          }
                        </p>

                        <p className="correct-word">
                          ✅{" "}
                          {
                            msg.correction
                              .correct
                          }
                        </p>

                      </div>

                    )}

                    {/* TEXT */}
                    <div className="formatted-text">

                      {msg.text
                        ?.split("\n")
                        .map(
                          (line, i) => {

                            if (
                              !line.trim()
                            ) {
                              return (
                                <div
                                  key={i}
                                  className="spacer"
                                />
                              );
                            }

                            // GERMAN
                            if (
                              line.startsWith(
                                "German:"
                              )
                            ) {

                              return (
                                <div
                                  key={i}
                                  className="german"
                                >
                                  🗣️{" "}
                                  {line
                                    .replace(
                                      "German:",
                                      ""
                                    )
                                    .trim()}
                                </div>
                              );
                            }

                            // ENGLISH
                            if (
                              line.startsWith(
                                "English:"
                              )
                            ) {

                              return (
                                <div
                                  key={i}
                                  className="english"
                                >
                                  <strong>
                                    ENG:
                                  </strong>{" "}
                                  {line
                                    .replace(
                                      "English:",
                                      ""
                                    )
                                    .trim()}
                                </div>
                              );
                            }

                            return (
                              <div key={i}>
                                {line}
                              </div>
                            );
                          }
                        )}

                    </div>

                  </div>

                </div>

              )
            )}

            {loading && (

              <div className="chat-row left">

                <div className="chat-bubble ai typing-bubble">
                  AI is typing...
                </div>

              </div>

            )}

            <div ref={chatEndRef}></div>

          </div>

          {/* INPUT */}
          <div className="chat-input">

            <input
              type="text"
              placeholder="Type in German..."
              value={input}
              onChange={(e) =>
                setInput(
                  e.target.value
                )
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                sendMessage()
              }
            />

            <button
              onClick={sendMessage}
              disabled={loading}
            >
              {loading
                ? "..."
                : "Send"}
            </button>

          </div>

        </div>

      </div>

    </AppLayout>
  );
}

export default AITutor;