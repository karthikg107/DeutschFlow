import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import AppLayout from
  "../components/Layout/AppLayout";

import api from "../utils/api";

function VocabularyLevel() {

  const { level } = useParams();

  const [words, setWords] =
    useState([]);


  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    fetchVocabulary();

  }, [level]);

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
          padding: "40px",
          color: "white",
          maxWidth: "1100px"
        }}
      >

        {/* ======================
            PAGE TITLE
        ====================== */}

        <h1
          style={{
            fontSize: "52px",
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

            maxWidth: "500px",

            padding: "16px 18px",

            marginBottom: "50px",

            borderRadius: "14px",

            border:
              "1px solid rgba(255,255,255,.08)",

            background:
              "rgba(255,255,255,.05)",

            color: "white",

            fontSize: "18px",

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
              fontSize: "32px",
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
        fontSize: "24px",
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
              "10px 16px",

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
                fontSize: "42px",
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
                gap: "22px"
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
                      fontSize: "24px",
                      fontWeight: "600"
                    }}
                  >

                    {word.article &&
                      `${word.article} `}

                    {word.germanWord}

                    {word.extraForms &&
                      `, ${word.extraForms}`}

                  </div>

                  {/* ENGLISH */}

                  <div
                    style={{
                      color: "#cbd5e1",
                      fontSize: "18px"
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
                      fontSize: "17px"
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