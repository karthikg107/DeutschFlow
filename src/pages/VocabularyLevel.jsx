import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import api from "../utils/api";
import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";
import "../styles/vocabulary.css";

function VocabularyLevel() {
  const { level }                       = useParams();
  const [words, setWords]               = useState([]);
  const [loading, setLoading]           = useState(true);
  const [search, setSearch]             = useState("");
  const [savedIds, setSavedIds]         = useState([]);

  useEffect(() => {
    Promise.all([
      api.get(`/vocabulary/level/${level}`),
      api.get("/vocabulary/saved"),
    ])
      .then(([vocabRes, savedRes]) => {
        setWords(vocabRes.data);
        setSavedIds(savedRes.data.map((item) => item.wordId));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [level]);

  const toggleSave = async (wordId) => {
    const isSaved = savedIds.includes(wordId);
    try {
      if (isSaved) {
        await api.delete(`/vocabulary/save/${wordId}`);
        setSavedIds((prev) => prev.filter((id) => id !== wordId));
        toast.success("Removed from saved vocabulary");
      } else {
        await api.post(`/vocabulary/save/${wordId}`);
        setSavedIds((prev) => [...prev, wordId]);
        toast.success("Saved to vocabulary");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  // Group by topic
  const groupedTopics = {};
  words.forEach((word) => {
    if (!word.topic) return;
    if (!groupedTopics[word.topic]) groupedTopics[word.topic] = [];
    groupedTopics[word.topic].push(word);
  });

  // Group by letter with search filter
  const groupedWords = {};
  words.forEach((word) => {
    if (!groupedWords[word.letter]) groupedWords[word.letter] = [];
    groupedWords[word.letter].push(word);
  });

  const q = search.toLowerCase();
  const filteredGroups = {};
  Object.keys(groupedWords).forEach((letter) => {
    const filtered = groupedWords[letter].filter(
      (w) =>
        w.germanWord.toLowerCase().includes(q) ||
        w.englishMeaning.toLowerCase().includes(q)
    );
    if (filtered.length > 0) filteredGroups[letter] = filtered;
  });

  if (loading) {
    return (
      <AppLayout>
        <div className="vocab-level-page">Loading vocabulary…</div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="vocab-level-page">
        <h1 className="vocab-title">{level} Vocabulary</h1>

        <input
          type="text"
          className="vocab-search"
          placeholder="Search vocabulary…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Topics */}
        {Object.keys(groupedTopics).length > 0 && (
          <div className="vocab-topics">
            <h2 className="vocab-topics-title">Common Topics</h2>
            {Object.entries(groupedTopics).map(([topic, tWords]) => (
              <div key={topic} className="vocab-topic-group">
                <h3 className="vocab-topic-name">{topic}</h3>
                <div className="vocab-chips">
                  {tWords.map((word) => (
                    <div key={word.id} className="vocab-chip">
                      <strong>
                        {word.article ? `${word.article} ` : ""}{word.germanWord}
                      </strong>
                      {" — "}{word.englishMeaning}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Alphabetical word list */}
        {Object.keys(filteredGroups)
          .sort()
          .map((letter) => (
            <div key={letter} className="vocab-letter-section">
              <h2 className="vocab-letter">{letter}</h2>
              <div className="vocab-words">
                {filteredGroups[letter].map((word) => (
                  <div key={word.id} className="vocab-word-row">
                    <div className="vocab-word-left">
                      <p className="vocab-word-german">
                        {word.article ? `${word.article} ` : ""}
                        {word.germanWord}
                        {word.extraForms ? `, ${word.extraForms}` : ""}
                      </p>
                      <p className="vocab-word-english">eng — {word.englishMeaning}</p>
                      {word.exampleSentence && (
                        <p className="vocab-word-sentence">{word.exampleSentence}</p>
                      )}
                    </div>
                    <div
                      className="vocab-bookmark"
                      role="button"
                      aria-label={savedIds.includes(word.id) ? "Unsave word" : "Save word"}
                      onClick={() => toggleSave(word.id)}
                    >
                      <Bookmark
                        size={20}
                        fill={savedIds.includes(word.id) ? "#8b5cf6" : "none"}
                        color={savedIds.includes(word.id) ? "#8b5cf6" : "#94a3b8"}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </AppLayout>
  );
}

export default VocabularyLevel;
