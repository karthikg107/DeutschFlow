export const startSpeechRecognition = (
  onResult
) => {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition is not supported.");
    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-US";

  recognition.continuous = true;

  recognition.interimResults = false;

  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    console.log("Recognition started");
  };

  recognition.onresult = (event) => {

    const transcript =
      event.results[0][0].transcript;

    console.log(
      "Transcript:",
      transcript
    );

    onResult(transcript);
  };

  recognition.onerror = (event) => {
    console.log(
      "Recognition error:",
      event.error
    );
  };

  recognition.onend = () => {
    console.log("Recognition ended");
  };

  recognition.start();

  return recognition;
};