export const startSpeechRecognition = (
  onResult
) => {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert(
      "Speech recognition is not supported."
    );
    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "de-DE";

  recognition.interimResults = false;

  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {

    const transcript =
      event.results[0][0].transcript;

    onResult(transcript);

  };

  recognition.start();

  return recognition;
};