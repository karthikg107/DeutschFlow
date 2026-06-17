import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import pronunciationSentences from "../data/pronunciationSentences";

function PronunciationPractice() {
  const { level } = useParams();

  const sentences =
    pronunciationSentences[level] || [];

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [showMeaning, setShowMeaning] =
    useState(false);

  const currentSentence =
    sentences[currentIndex];

  if (!currentSentence) {
    return (
      <AppLayout>
        <div className="speaking-page">
          <p>No sentences found.</p>
        </div>
      </AppLayout>
    );
  }

  function speak(text) {

  window.speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = "de-DE";

  window.speechSynthesis.speak(
    utterance
  );

}


  return (
    <AppLayout>
      <div className="speaking-page">

        <Link
          to="/speaking/pronunciation"
          className="back-btn"
        >
          ← Back
        </Link>

        <div className="speaking-hero">

          <h1>
            {level.toUpperCase()} Pronunciation Practice
          </h1>

          <p>
            Listen to German sentences and
            practice speaking them aloud.
          </p>

        </div>

        <div className="speaking-card pronunciation-card">

          <p>
            Sentence {currentIndex + 1}
            of {sentences.length}
          </p>

          <h2 className="german-sentence">
            {currentSentence.german}
          </h2>

          <div className="pronunciation-actions">

            <button
  className="activity-btn"
  onClick={() =>
    speak(currentSentence.german)
  }
>
  Listen
</button>

            <button
              className="activity-btn"
              onClick={() =>
                setShowMeaning(true)
              }
            >
              Meaning
            </button>

          </div>

        </div>

        <div className="selected-scenario">

          <h3>Practice Speaking</h3>

          <p>
            Press the microphone and repeat
            the sentence.
          </p>

          <button className="mic-btn">
            Mic
          </button>

        </div>

        <div className="completion-actions">

          <button
            className="completion-btn"
            disabled={currentIndex === 0}
            onClick={() =>
              setCurrentIndex(
                currentIndex - 1
              )
            }
          >
            Previous
          </button>

          <button
            className="completion-btn"
            disabled={
              currentIndex ===
              sentences.length - 1
            }
            onClick={() =>
              setCurrentIndex(
                currentIndex + 1
              )
            }
          >
            Next
          </button>

        </div>

        {showMeaning && (
          <>
            <div
              className="sheet-overlay"
              onClick={() =>
                setShowMeaning(false)
              }
            />

            <div className="pronunciation-sheet">

              <h3>Meaning</h3>

              <p>
                {currentSentence.english}
              </p>

              <button
                className="completion-btn"
                onClick={() =>
                  setShowMeaning(false)
                }
              >
                Close
              </button>

            </div>
          </>
        )}

      </div>
    </AppLayout>
  );
}

export default PronunciationPractice;