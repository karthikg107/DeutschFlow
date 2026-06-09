import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import api from "../utils/api";

import "../styles/dashboard.css";

function GrammarTopic() {

  const { slug } = useParams();

  const [topic, setTopic] = useState(null);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const fetchTopic = async () => {

      try {

        const response = await api.get(
          `/grammar/topic/${slug}`
        );

        setTopic(response.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

    fetchTopic();

  }, [slug]);


  // =========================
// CONTENT RENDERER
// =========================

const renderContent = (
  content,
  sectionType
) => {

  try {

    const parsed = JSON.parse(content);


    // =========================
    // EXERCISE RENDERER
    // =========================

    if (
      sectionType === "exercise"
    ) {

      return (

        <ExerciseCard
  question={
    parsed.question
  }

  options={
    parsed.options
  }

  answer={
    parsed.answer
  }

  explanation={
    parsed.explanation
  }


  onComplete={async () => {

  try {

    await api.post(
      "/progress/save",
      {
        lessonSlug: slug,
      }
    );

  } catch (error) {

    console.error(
      "Failed to save progress",
      error
    );
  }
}}
/>

      );
    }


    // =========================
    // TABLE RENDERER
    // =========================

    if (
      parsed.headers &&
      parsed.rows
    ) {

      return (

        <div
          style={{
            overflowX: "auto",
            marginTop: "18px",
          }}
        >

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background:
                "rgba(255,255,255,0.02)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >

            <thead>

              <tr>

                {parsed.headers.map(
                  (
                    header,
                    index
                  ) => (

                    <th
                      key={index}
                      style={{
                        textAlign:
                          "left",

                        padding:
                          "16px 18px",

                        borderBottom:
                          "1px solid rgba(255,255,255,0.08)",

                        fontSize:
                          "0.95rem",

                        fontWeight:
                          "600",

                        opacity: 0.8,
                      }}
                    >
                      {header}
                    </th>

                  )
                )}

              </tr>

            </thead>

            <tbody>

              {parsed.rows.map(
                (
                  row,
                  rowIndex
                ) => (

                  <tr key={rowIndex}>

                    {row.map(
                      (
                        cell,
                        cellIndex
                      ) => (

                        <td
                          key={cellIndex}
                          style={{
                            padding:
                              "16px 18px",

                            borderBottom:
                              "1px solid rgba(255,255,255,0.05)",

                            lineHeight:
                              "1.6",
                          }}
                        >
                          {cell}
                        </td>

                      )
                    )}

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      );
    }


    // =========================
    // ARRAY CONTENT
    // =========================

    if (Array.isArray(parsed)) {

      return (

        <div
          style={{
            marginTop: "12px",
          }}
        >

          {parsed.map(
            (item, index) => (

              <div
                key={index}
                style={{
                  marginBottom:
                    "14px",

                  lineHeight:
                    "1.75",
                }}
              >

                {typeof item ===
                "string" ? (

                  <div>
                    • {item}
                  </div>

                ) : (

                  <div
                    style={{
                      display:
                        "flex",

                      flexDirection:
                        "column",

                      gap: "6px",
                    }}
                  >

                    {Object.entries(
                      item
                    ).map(
                      ([
                        key,
                        value,
                      ]) => (

                        <div
                          key={key}
                          style={{
                            lineHeight:
                              "1.75",
                          }}
                        >

                          <strong
                            style={{
                              textTransform:
                                "capitalize",
                            }}
                          >
                            {key}:
                          </strong>{" "}

                          {value}

                        </div>

                      )
                    )}

                  </div>

                )}

              </div>

            )
          )}

        </div>

      );
    }


    // =========================
    // NORMAL TEXT
    // =========================

    return (

      <div
        style={{
          lineHeight: "1.75",
          marginTop: "10px",
        }}
      >
        {content}
      </div>

    );

  } catch {

    return (

      <div
        style={{
          lineHeight: "1.75",
          marginTop: "10px",
        }}
      >
        {content}
      </div>

    );
  }
};

function ExerciseCard({
  question,
  options,
  answer,
  explanation,
  onComplete,
}) {

  const [selected, setSelected] =
  useState(null);

const [showResult, setShowResult] =
  useState(false);

  return (

    <div
      style={{
        marginTop: "18px",
      }}
    >

      <div
        style={{
          marginBottom: "16px",
          fontSize: "1rem",
          fontWeight: "600",
        }}
      >
        {question}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >

        {options.map((option) => {

          const isCorrect =
            selected === option &&
            option === answer;

          const isWrong =
            selected === option &&
            option !== answer;

          return (
 
            <button
              key={option}
              onClick={() => {

  if (selected) return;

  setSelected(option);

  setShowResult(true);

  if (option === answer) {

    onComplete();
  }
}}
              style={{
                padding:
                  "14px 16px",

                borderRadius:
                  "14px",

                border:
                  isCorrect
                    ? "1px solid #22c55e"
                    : isWrong
                    ? "1px solid #ef4444"
                    : "1px solid rgba(255,255,255,0.08)",

                background:
                  isCorrect
                    ? "rgba(34,197,94,0.12)"
                    : isWrong
                    ? "rgba(239,68,68,0.12)"
                    : "rgba(255,255,255,0.03)",

                color: "white",

                cursor:
    selected
      ? "default"
      : "pointer",

  opacity:
    selected && selected !== option
      ? 0.7
      : 1,

                textAlign:
                  "left",

                transition:
                  "0.2s ease",
              }}
            >
              {option}
            </button>

          );
        })}

      </div>

      {showResult && (

        <div
          style={{
            marginTop: "16px",
            fontSize: "0.95rem",
            opacity: 0.9,
          }}
        >

          {selected === answer ? (

            <div>
              ✅ Correct!
            </div>

          ) : (

            <div>
              ❌ Correct answer: {answer}
            </div>

          )}

          <div
            style={{
              marginTop: "10px",
              lineHeight: "1.7",
              opacity: 0.75,
            }}
          >
            {explanation}
          </div>

        </div>

      )}

    </div>

  );
}


  if (loading) {
    return (
      <AppLayout>
        <div className="elite-dashboard">
          <p>Loading lesson...</p>
        </div>
      </AppLayout>
    );
  }


  if (!topic) {
    return (
      <AppLayout>
        <div className="elite-dashboard">
          <p>Lesson not found.</p>
        </div>
      </AppLayout>
    );
  }


  return (
    <AppLayout>

      <div className="elite-dashboard">

        {/* HERO */}
        <div
          className="hero-card"
          style={{
            marginBottom: "24px",
          }}
        >

          <h1>
            {topic.title}
          </h1>

          <p>
            {topic.description}
          </p>

        </div>


        {/* MAIN LESSON */}
        <div
          style={{
            maxWidth: "1050px",
            marginLeft: "0px",
            padding: "10px 20px 60px",
          }}
        >

          {topic.sections.map((section) => (

            <div
              key={section.id}
              style={{
                marginBottom: "34px",
                paddingBottom: "24px",
                borderBottom:
                  "1px solid rgba(255,255,255,0.06)",
              }}
            >

              {section.title && (

                <h2
                  style={{
                    fontSize: "1.45rem",
                    marginBottom: "16px",
                    fontWeight: "700",
                    letterSpacing: "-0.4px",
                  }}
                >
                  {section.title}
                </h2>

              )}

              {renderContent(
  section.content,
  section.type
)}

            </div>

          ))}

        </div>

      </div>

    </AppLayout>
  );
}

export default GrammarTopic;