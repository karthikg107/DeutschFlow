import AppLayout from "../components/layout/AppLayout";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { startSpeechRecognition } from "../utils/speechRecognition";
import { useState, useRef, useEffect } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

function TalkWithMia() {

  const [messages, setMessages] = useState([
  {
    id: 1,
    sender: "mia",
    text: "Hallo! Worüber möchtest du heute sprechen?"
  }
]);

  const [isRecording, setIsRecording] =
    useState(false);

  const [isMiaTyping, setIsMiaTyping] =
    useState(false); 

  const [isMiaSpeaking, setIsMiaSpeaking] =
    useState(false);

  const navigate = useNavigate();


  const chatEndRef = useRef(null);

  const [miaCompleted, setMiaCompleted] =
  useState(false);

  useEffect(() => {

  chatEndRef.current?.scrollIntoView({
    behavior: "smooth"
  });

}, [
  messages,
  isMiaTyping,
  isMiaSpeaking
]);

useEffect(() => {

  return () => {
    speechSynthesis.cancel();
  };

}, []);

function speak(text) {

  speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = "de-DE";

  utterance.onstart = () => {
    setIsMiaSpeaking(true);
  };

  utterance.onend = () => {
    setIsMiaSpeaking(false);
  };

  speechSynthesis.speak(utterance);
}

useEffect(() => {

  speak(
    "Hallo! Worüber möchtest du heute sprechen?"
  );

}, []);

const saveMiaProgress =
  async () => {

    try {

      await api.post(
        "/progress/save",
        {
          lessonSlug: "talk-with-mia",
        }
      );

      toast.success(
        "Conversation completed!"
      );

    } catch (error) {

      console.error(error);

    }

  };

  function handleMicClick() {

  startSpeechRecognition(

    (transcript) => {

      setMessages((prev) => {

  const updated = [

    ...prev,

    {
      id: Date.now(),
      sender: "user",
      text: transcript
    }

  ];

  const userMessages =
    updated.filter(
      (m) =>
        m.sender === "user"
    ).length;

  if (
    userMessages === 5 &&
    !miaCompleted
  ) {

    setMiaCompleted(true);

    saveMiaProgress();

  }

  return updated;

});

      setIsMiaTyping(true);

      setTimeout(async () => {

  try {

    const response = await api.post(
  "/ai/chat",
  {
    mode: "talkWithMia",
    message: transcript
  }
);


const reply = response.data.reply;

    setIsMiaTyping(false);

    setMessages((prev) => [

      ...prev,

      {
        id: Date.now() + 1,
        sender: "mia",
        text: reply
      }

    ]);

    speak(reply);

  } catch (error) {

    console.error(error);

    setIsMiaTyping(false);

    setMessages((prev) => [

      ...prev,

      {
        id: Date.now() + 1,
        sender: "mia",
        text: "Entschuldigung, ich habe gerade ein Problem."
      }

    ]);

  }

}, 1500);

    },

    "de-DE",

    () => {
      setIsRecording(true);
    },

    () => {
      setIsRecording(false);
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

{isMiaSpeaking && (

  <p className="mia-speaking">
    Mia is speaking...
  </p>

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