import { useEffect, useState } from "react";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import api from "../utils/api";
import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";
import "../styles/vocabulary.css";

function SavedVocabulary() {
  const [savedWords, setSavedWords] = useState([]);
  const [loading, setLoading]       = useState(true);
  const [search, setSearch]         = useState("");

  useEffect(() => {
    api.get("/vocabulary/saved")
      .then((r) => setSavedWords(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const removeWord = async (wordId) => {
    try {
      await api.delete(`/vocabulary/save/${wordId}`);
      setSavedWords((prev) => prev.filter((item) => item.word.id !== wordId));
      toast.success("Removed from saved vocabulary");
    } catch {
      toast.error("Something went wrong");
    }
  };

  const q = search.toLowerCase();
  const filteredWords = savedWords.filter(
    (item) =>
      item.word.germanWord.toLowerCase().includes(q) ||
      item.word.englishMeaning.toLowerCase().includes(q)
  );

  const groupedLevels = { A1: [], A2: [], B1: [] };
  filteredWords.forEach((item) => {
    const lv = item.word.levelCode;
    if (groupedLevels[lv]) groupedLevels[lv].push(item);
  });
  Object.values(groupedLevels).forEach((arr) =>
    arr.sort((a, b) =>
      a.word.germanWord.localeCompare(b.word.germanWord, "de")
    )
  );

  if (loading) {
    return (
      <AppLayout>
        <div className="vocab-saved-page">Loading…</div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="vocab-saved-page">
        <PageHeader
          backTo="/vocabulary"
          backLabel="Vocabulary"
          title="Saved Words"
          subtitle="Your personal vocabulary collection."
        />

        <input
          type="text"
          className="vocab-search"
          placeholder="Search saved words…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredWords.length === 0 ? (
          <p className="vocab-saved-empty">No saved words found.</p>
        ) : (
          Object.entries(groupedLevels)
            .filter(([, words]) => words.length > 0)
            .map(([lv, words]) => (
              <div key={lv} className="vocab-saved-group">
                <h2 className="vocab-saved-level-title">
                  {lv} Vocabulary ({words.length})
                </h2>
                <div className="vocab-words">
                  {words.map((item) => {
                    const word = item.word;
                    return (
                      <div key={item.id} className="vocab-word-row">
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
                          aria-label="Remove from saved"
                          onClick={() => removeWord(word.id)}
                        >
                          <Bookmark size={20} fill="#8b5cf6" color="#8b5cf6" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
        )}
      </div>
    </AppLayout>
  );
}

export default SavedVocabulary;
