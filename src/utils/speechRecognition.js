export const startSpeechRecognition = (
  onResult,
  language = "de-DE",
  onStart,
  onEnd
) => {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {

    alert(
      "Speech recognition is not supported in this browser."
    );

    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = language;

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.onstart = () => {

    if (onStart) {
      onStart();
    }

  };

  recognition.onresult = (event) => {

    const transcript =
      event.results[0][0].transcript;

    onResult(transcript);

  };

  recognition.onerror = (event) => {

    console.log(
      "Speech Error:",
      event.error
    );

  };

  recognition.onend = () => {

    if (onEnd) {
      onEnd();
    }

  };

  recognition.start();

};