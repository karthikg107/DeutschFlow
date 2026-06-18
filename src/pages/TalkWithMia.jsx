import AppLayout from "../components/layout/AppLayout";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startSpeechRecognition } from "../utils/speechRecognition";
import { useState, useRef, useEffect } from "react";

function TalkWithMia() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "mia",
      text: "Hallo! Worüber möchtest du heute sprechen?"
    },
    {
      id: 2,
      sender: "user",
      text: "Ich lerne Deutsch."
    },
    {
      id: 3,
      sender: "mia",
      text: "Das ist großartig!"
    }
  ]);

  const [isRecording, setIsRecording] =
    useState(false);

  const [isMiaTyping, setIsMiaTyping] =
    useState(false); // TEMPORARY TEST

  const [isMiaSpeaking, setIsMiaSpeaking] =
    useState(false);

  const navigate = useNavigate();

  const chatEndRef = useRef(null);

  useEffect(() => {

  chatEndRef.current?.scrollIntoView({
    behavior: "smooth"
  });

}, [messages]);

  function handleMicClick() {

  startSpeechRecognition(
    (transcript) => {

      // USER MESSAGE

      setMessages((prev) => [

        ...prev,

        {
          id: Date.now(),
          sender: "user",
          text: transcript
        }

      ]);

      // MIA TYPING

      setIsMiaTyping(true);

      setTimeout(() => {

        setIsMiaTyping(false);

        setMessages((prev) => [

          ...prev,

          {
            id: Date.now() + 1,
            sender: "mia",
            text: "Das klingt interessant!"
          }

        ]);

      }, 1500);

    }
  );

}

  return (

    <AppLayout>

      <div className="speaking-page talk-page">

        <button
          className="back-btn"
          onClick={() => navigate("/speaking")}
        >
          ← Back
        </button>

        <h1>
          Talk With Mia
        </h1>

        <p>
          Talk naturally with Mia and build confidence speaking German.
        </p>

        <div className="talk-chat-box">

          {messages.map((message) => (

            <div
              key={message.id}
              className={
                message.sender === "mia"
                  ? "mia-chat-message"
                  : "user-chat-message"
              }
            >

              {message.sender === "mia" && (
                <div className="chat-speaker">
                  Mia
                </div>
              )}

              <p>
                {message.text}
              </p>

            </div>

          ))}

          {isMiaTyping && (

            <div className="mia-chat-message">

              <div className="chat-speaker">
                Mia
              </div>

              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

          )}

          <div ref={chatEndRef}></div>

        </div>

        <button
          className="mic-btn"
          onClick={handleMicClick}
          disabled={
            isRecording ||
            isMiaTyping ||
            isMiaSpeaking
          }
        >
          <Mic size={28} />
        </button>


      </div>

    </AppLayout>

  );
}

export default TalkWithMia;