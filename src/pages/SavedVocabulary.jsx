import { useEffect, useState } from "react";

import AppLayout from
  "../components/Layout/AppLayout";

import api from "../utils/api";

import { Bookmark } from "lucide-react";

import toast from "react-hot-toast";

function SavedVocabulary() {

  const [savedWords, setSavedWords] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    fetchSavedWords();

  }, []);

  const fetchSavedWords =
    async () => {

      try {

        const response =
          await api.get(
            "/vocabulary/saved"
          );

        setSavedWords(
          response.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    

  const removeWord =
    async (wordId) => {

      try {

        await api.delete(
          `/vocabulary/save/${wordId}`
        );

        setSavedWords(
          savedWords.filter(
            (item) =>
              item.word.id !== wordId
          )
        );

        toast.success(
          "Removed from saved vocabulary"
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Something went wrong"
        );

      }

    };

  const filteredWords =
  savedWords.filter((item) => {

    const query =
      search.toLowerCase();

    return (

      item.word.germanWord
        .toLowerCase()
        .includes(query)

      ||

      item.word.englishMeaning
        .toLowerCase()
        .includes(query)

    );

  });

const groupedLevels = {
  A1: [],
  A2: [],
  B1: []
};

filteredWords.forEach((item) => {

  const level =
    item.word.levelCode;

  if (groupedLevels[level]) {

    groupedLevels[level]
      .push(item);

  }

});

Object.keys(groupedLevels)
  .forEach((level) => {

    groupedLevels[level]
      .sort((a, b) =>

        a.word.germanWord
          .localeCompare(
            b.word.germanWord,
            "de"
          )

      );

});

  if (loading) {

    return (

      <AppLayout>

        <div
          style={{
            padding: "40px",
            color: "white"
          }}
        >
          Loading...
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

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "12px"
          }}
        >
          Saved Vocabulary
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "30px"
          }}
        >
          {savedWords.length}
          {" "}
          saved words
        </p>

        <input

          type="text"

          placeholder="Search saved words..."

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          style={{

            width: "100%",

            maxWidth: "500px",

            padding: "16px",

            borderRadius: "14px",

            border:
              "1px solid rgba(255,255,255,.08)",

            background:
              "rgba(255,255,255,.05)",

            color: "white",

            marginBottom: "40px"

          }}

        />

        {filteredWords.length === 0 ? (

          <div
            style={{
              color: "#94a3b8",
              marginTop: "40px"
            }}
          >
            No saved words found.
          </div>

        ) : (

          Object.entries(groupedLevels)
  .filter(
    ([, words]) =>
      words.length > 0
  )
  .map(([level, words]) => (

    <div
      key={level}
      style={{
        marginBottom: "60px"
      }}
    >

      <h2
  style={{
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "24px",
    paddingBottom: "12px",
    borderBottom:
      "1px solid rgba(255,255,255,.08)",
    color: "#818cf8"
  }}
>
        {level} Vocabulary
        {" "}
        ({words.length})
      </h2>

      {words.map((item) => {

        const word =
          item.word;

        return (

          <div
            key={item.id}
            style={{
              marginBottom: "32px",
              lineHeight: "1.7"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems:
                  "center"
              }}
            >

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

              <Bookmark
                size={22}
                fill="#8b5cf6"
                color="#8b5cf6"
                onClick={() =>
                  removeWord(
                    word.id
                  )
                }
                style={{
                  cursor:
                    "pointer"
                }}
              />

            </div>

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

            <div
              style={{
                color: "#94a3b8",
                fontSize: "17px"
              }}
            >
              {
                word.exampleSentence
              }
            </div>

          </div>

        );

      })}

    </div>

))
        )}

      </div>

    </AppLayout>

  );

}

export default SavedVocabulary;