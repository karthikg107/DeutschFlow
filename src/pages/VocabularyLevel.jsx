import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import AppLayout from
  "../components/Layout/AppLayout";

import api from "../utils/api";

import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";

function VocabularyLevel() {

  const isMobile =
  window.innerWidth < 768;

  const { level } = useParams();

  const [words, setWords] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [savedIds, setSavedIds] =
    useState([]);

  const fetchVocabulary =
    async () => {

      try {

        const response =
          await api.get(
            `/vocabulary/level/${level}`
          );

        setWords(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

  const fetchSavedWords =
    async () => {

      try {

        const response =
          await api.get(
            "/vocabulary/saved"
          );

        const ids =
          response.data.map(
            (item) => item.wordId
          );

        setSavedIds(ids);

      } catch (error) {

        console.log(error);

      }

    };

  const toggleSaveWord =
    async (wordId) => {

      try {

        const isSaved =
          savedIds.includes(wordId);

        if (isSaved) {

          await api.delete(
            `/vocabulary/save/${wordId}`
          );

          setSavedIds((prev) =>
  prev.filter(
    (id) => id !== wordId
  )
);

          toast.success(
            "Removed from saved vocabulary"
          );

        } else {

          await api.post(
            `/vocabulary/save/${wordId}`
          );

          setSavedIds((prev) => [
  ...prev,
  wordId
]);

          toast.success(
            "Saved to vocabulary"
          );

        }

      } catch (error) {

        console.log(error);

        toast.error(
          "Something went wrong"
        );

      }

    };

  useEffect(() => {

    fetchVocabulary();

    fetchSavedWords();

  }, [level]);

  /* ======================
      GROUP WORDS BY LETTER
  ====================== */

  const groupedWords = {};

  words.forEach((word) => {

    if (
      !groupedWords[word.letter]
    ) {

      groupedWords[word.letter] = [];

    }

    groupedWords[word.letter]
      .push(word);

  });

  const groupedTopics = {};

words.forEach((word) => {

  if (!word.topic) return;

  if (!groupedTopics[word.topic]) {

    groupedTopics[word.topic] = [];

  }

  groupedTopics[word.topic]
    .push(word);

});

  /* ======================
      SEARCH FILTER
  ====================== */

  const filteredGroups = {};

  Object.keys(groupedWords)
    .forEach((letter) => {

      const filtered =
        groupedWords[letter]
          .filter((word) => {

            const query =
              search.toLowerCase();

            return (

              word.germanWord
                .toLowerCase()
                .includes(query)

              ||

              word.englishMeaning
                .toLowerCase()
                .includes(query)

            );

          });

      if (filtered.length > 0) {

        filteredGroups[letter] =
          filtered;

      }

  });

  if (loading) {

    return (

      <AppLayout>

        <div className="page">
          Loading vocabulary...
        </div>

      </AppLayout>

    );

  }
  

  return (

    <AppLayout>

      <div
        style={{
          padding:
  isMobile
    ? "20px"
    : "40px",
          color: "white",
          maxWidth: "1100px"
        }}
      >

        {/* ======================
            PAGE TITLE
        ====================== */}

        <h1
          style={{
            fontSize:
  isMobile
    ? "40px"
    : "52px",
            marginBottom: "30px",
            fontWeight: "700"
          }}
        >
          {level} Vocabulary
        </h1>

        {/* ======================
            SEARCH
        ====================== */}

        <input

          type="text"

          placeholder="Search vocabulary..."

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

          style={{

            width: "100%",

            maxWidth:
  isMobile
    ? "100%"
    : "500px",

boxSizing: "border-box",    

padding:
  isMobile
    ? "14px 16px"
    : "16px 18px",

marginBottom:
  isMobile
    ? "35px"
    : "50px",

fontSize:
  isMobile
    ? "16px"
    : "18px",

            borderRadius: "14px",

            border:
              "1px solid rgba(255,255,255,.08)",

            background:
              "rgba(255,255,255,.05)",

            color: "white",


            outline: "none"

          }}

        />

        {/* ======================
            TOPIC SECTION
        ====================== */}

        <div
          style={{
            marginBottom: "60px"
          }}
        >

          <h2
            style={{
              fontSize:
  isMobile
    ? "26px"
    : "32px",
              marginBottom: "20px"
            }}
          >
            Common Topics
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px"
            }}
          >

            {Object.keys(groupedTopics)
  .map((topic) => (

  <div
    key={topic}

    style={{
      marginBottom: "30px"
    }}
  >

    <h3
      style={{
        fontSize:
  isMobile
    ? "20px"
    : "24px",
        marginBottom: "14px",
        color: "#a5b4fc"
      }}
    >
      {topic}
    </h3>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "14px"
      }}
    >

      {groupedTopics[topic]
        .map((word) => (

        <div
          key={word.id}

          style={{
            background:
              "rgba(255,255,255,.05)",

            padding:
  isMobile
    ? "8px 12px"
    : "10px 16px",

            borderRadius:
              "12px",

            border:
              "1px solid rgba(255,255,255,.06)"
          }}
        >

          <strong>

  {word.article
    ? `${word.article} `
    : ""}

  {word.germanWord}

</strong>

{" — "}

{word.englishMeaning}

        </div>

      ))}

    </div>

  </div>

))}

          </div>

        </div>

        {/* ======================
            ALPHABET WORDS
        ====================== */}

        {Object.keys(filteredGroups)
          .sort()
          .map((letter) => (

          <div
            key={letter}
            style={{
              marginBottom: "50px"
            }}
          >

            {/* LETTER */}

            <h2
              style={{
                fontSize:
  isMobile
    ? "32px"
    : "42px",
                marginBottom: "24px",
                color: "#818cf8"
              }}
            >
              {letter}
            </h2>

            {/* WORDS */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap:
  isMobile
    ? "16px"
    : "22px",
              }}
            >

              {filteredGroups[
                letter
              ].map((word) => (

                <div
                  key={word.id}
                  style={{
                    lineHeight: "1.7"
                  }}
                >

                  {/* GERMAN WORD */}

                  <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    fontSize:
      isMobile
        ? "20px"
        : "24px",
    fontWeight: "600"
  }}
>

  <div
  style={{
    flex: 1
  }}
>

    {word.article &&
      `${word.article} `}

    {word.germanWord}

    {word.extraForms &&
      `, ${word.extraForms}`}

  </div>

  <Bookmark
    size={22}
    onClick={() =>
      toggleSaveWord(word.id)
    }
    fill={
      savedIds.includes(word.id)
        ? "#8b5cf6"
        : "none"
    }
    color={
      savedIds.includes(word.id)
        ? "#8b5cf6"
        : "#94a3b8"
    }
    style={{
  cursor: "pointer",
  transition: "all .2s ease",
  flexShrink: 0
}}
  />

</div>

                  {/* ENGLISH */}

                  <div
                    style={{
                      color: "#cbd5e1",
                      fontSize:
  isMobile
    ? "16px"
    : "18px",
                    }}
                  >

                    eng — {
                      word.englishMeaning
                    }

                  </div>

                  {/* SENTENCE */}

                  <div
                    style={{
                      color: "#94a3b8",
                      marginTop: "4px",
                      fontSize:
  isMobile
    ? "15px"
    : "17px",
                    }}
                  >

                    {
                      word.exampleSentence
                    }

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