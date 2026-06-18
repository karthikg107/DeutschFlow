import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startSpeechRecognition } from "../utils/speechRecognition";


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

  const navigate = useNavigate();

  function handleMicClick() {

  startSpeechRecognition(
    (transcript) => {

      setMessages((prev) => [

        ...prev,

        {
          id: Date.now(),
          sender: "user",
          text: transcript
        }

      ]);

    }
  );

}

  return (
  <AppLayout>

    <div className="speaking-page">

      <button
        className="back-btn"
        onClick={() => navigate("/speaking")}
      >
        ← Back
      </button>

      <h1>Talk With Mia</h1>

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

            <p>{message.text}</p>

          </div>

        ))}

      </div>

      <button
  className="mic-btn"
  onClick={handleMicClick}
>
        <Mic size={28} />
      </button>

    </div>

  </AppLayout>
);
}

export default TalkWithMia;