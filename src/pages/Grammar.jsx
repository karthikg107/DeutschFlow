import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import api from "../utils/api";

import "../styles/dashboard.css";

function Grammar() {

  const navigate = useNavigate();

  const [levels, setLevels] = useState([]);

  const [loading, setLoading] = useState(true);

  const [completedLessons, setCompletedLessons] =
  useState([]);


  // =========================
  // COURSE STRUCTURE
  // =========================

  const units = [

    {
      title: "Foundations",
      desc:
        "Learn the core basics of German pronunciation, pronouns, numbers, and verbs.",

      topics: [
        "alphabet",
        "pronouns",
        "numbers",
        "present-tense",
      ],
    },

    {
      title: "Building Sentences",
      desc:
        "Understand sentence formation and how questions work in German.",

      topics: [
        "sentence-structure",
        "w-questions",
        "yes-no-questions",
      ],
    },

    {
      title: "Grammar Basics",
      desc:
        "Master articles, cases, and possessive structures.",

      topics: [
        "articles",
        "nominativ",
        "akkusativ",
        "possessive-pronouns",
      ],
    },

    {
      title: "Real Communication",
      desc:
        "Build practical communication skills with modal verbs and daily conversation grammar.",

      topics: [
        "modal-verbs",
        "separable-verbs",
        "negation",
        "time-date",
        "dativ",
      ],
    },

  ];


  useEffect(() => {

    const fetchGrammar = async () => {

      try {

        const response = await api.get("/grammar");

        const progressResponse =
  await api.get("/progress");

const completed =
  progressResponse.data.map(
    (item) => item.lessonSlug
  );

setCompletedLessons(completed);

        setLevels(response.data);

      } catch (error) {

        console.error(
          "Failed to fetch grammar:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchGrammar();

  }, []);


  // =========================
  // GET ALL TOPICS
  // =========================

  const allTopics =
    levels.flatMap(
      (level) => level.topics
    );

    console.log("Levels:", levels);

console.log("All Topics:", allTopics);

    const nextLesson =
  allTopics.find(
    (topic) =>
      !completedLessons.includes(
        topic.slug
      )
  );


  return (
    <AppLayout>

      <div className="elite-dashboard">

        {/* HERO */}
        <div className="hero-card">

          <h1>
            📘 German Grammar Roadmap
          </h1>

          <p>
            Follow a structured A1 learning
            path step by step.
          </p>

        </div>

        {nextLesson && (

  <div
    style={{
      marginTop: "20px",
      marginBottom: "30px",
      padding: "24px",
      borderRadius: "20px",

      background:
        "linear-gradient(135deg, rgba(124,92,255,0.18), rgba(124,92,255,0.06))",

      border:
        "1px solid rgba(124,92,255,0.2)",
    }}
  >

    <div
      style={{
        fontSize: "0.9rem",
        opacity: 0.7,
        marginBottom: "10px",
      }}
    >
      Continue Learning
    </div>

    <h2
      style={{
        marginBottom: "10px",
      }}
    >
      {nextLesson.title}
    </h2>

    <p
      style={{
        opacity: 0.75,
        lineHeight: "1.7",
        marginBottom: "18px",
      }}
    >
      {nextLesson.description}
    </p>

    <button
      className="elite-btn"
      onClick={() =>
        navigate(
          `/grammar/${nextLesson.slug}`
        )
      }
    >
      Resume Lesson
    </button>

  </div>

)}

        {/* LOADING */}
        {loading ? (

          <p style={{ marginTop: "30px" }}>
            Loading grammar...
          </p>

        ) : (

          <div
            style={{
              marginTop: "40px",
            }}
          >

            {units.map((unit, unitIndex) => {

              const unitTopics =
                allTopics.filter(
                  (topic) =>
                    unit.topics.includes(
                      topic.slug
                    )
                );

              return (

                <div
                  key={unitIndex}
                  style={{
                    marginBottom: "40px",
                  }}
                >

                  {/* UNIT HEADER */}
                  <div
                    style={{
                      marginBottom: "24px",
                    }}
                  >

                    <div
                      style={{
                        fontSize: "0.9rem",
                        opacity: 0.6,
                        marginBottom: "8px",
                        textTransform:
                          "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Unit {unitIndex + 1}
                    </div>

                    <h2
                      style={{
                        fontSize: "2rem",
                        marginBottom: "10px",
                      }}
                    >
                      {unit.title}
                    </h2>

                    <p
                      style={{
                        opacity: 0.75,
                        maxWidth: "700px",
                        lineHeight: "1.7",
                      }}
                    >
                      {unit.desc}
                    </p>

                  </div>


                  {/* TOPICS */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >

                    {unitTopics.map(
                      (topic, index) => {

                        const isCompleted =
  completedLessons.includes(
    topic.slug
  );

                        const previousTopic =
                          unitTopics[index - 1];

                        const isLocked =
  index > 0 &&
  !completedLessons.includes(
    previousTopic.slug
  );

                        return (

                          <div
                            key={topic.id}
                            style={{
                              position: "relative",
                            }}
                          >

                            {/* LESSON CARD */}
                            <div
  onClick={() => {

    if (isLocked)
      return;

    navigate(
      `/grammar/${topic.slug}`
    );

  }}

  onMouseEnter={(e) => {

    if (!isLocked) {

      e.currentTarget.style.borderColor =
        "rgba(124,92,255,0.35)";

    }

  }}

  onMouseLeave={(e) => {

    e.currentTarget.style.borderColor =
      "rgba(255,255,255,0.05)";

  }}

  style={{
    background:
      "rgba(255,255,255,0.03)",

    border:
      "1px solid rgba(255,255,255,0.05)",

    borderRadius: "18px",

    padding: "24px",

    cursor:
      isLocked
        ? "not-allowed"
        : "pointer",

    transition: "0.2s ease",

    opacity:
      isLocked
        ? 0.55
        : 1,
  }}
>

                              <div
                                style={{
                                  display: "flex",

                                  justifyContent:
                                    "space-between",

                                  alignItems:
                                    "center",

                                  gap: "20px",

                                  flexWrap: "wrap",
                                }}
                              >

                                <div>

                                  <div
                                    style={{
                                      fontSize:
                                        "0.85rem",

                                      opacity: 0.55,

                                      marginBottom:
                                        "6px",
                                    }}
                                  >
                                    {isCompleted
                                      ? "Completed"
                                      : isLocked
                                      ? "Locked"
                                      : `Lesson ${index + 1}`}
                                  </div>

                                  <h3
                                    style={{
                                      marginBottom:
                                        "6px",

                                      fontSize:
                                        "1.15rem",
                                    }}
                                  >
                                    {topic.title}
                                  </h3>

                                  <p
                                    style={{
                                      opacity: 0.7,

                                      lineHeight:
                                        "1.6",
                                    }}
                                  >
                                    {
                                      topic.description
                                    }
                                  </p>


                                  {/* LESSON META */}
                                  <div
                                    style={{
                                      display: "flex",

                                      gap: "14px",

                                      marginTop:
                                        "10px",

                                      fontSize:
                                        "0.85rem",

                                      opacity: 0.6,

                                      flexWrap:
                                        "wrap",
                                    }}
                                  >

                                    <span>
                                      Beginner
                                    </span>

                                    <span>
                                      5–10 min
                                    </span>

                                    <span>
                                      Grammar
                                    </span>

                                  </div>

                                </div>

                                <button
                                  className="elite-btn"
                                  style={{
                                    background:
                                      isCompleted
                                        ? "#22c55e"
                                        : isLocked
                                        ? "rgba(255,255,255,0.08)"
                                        : "",
                                  }}
                                >
                                  {isCompleted
                                    ? "Completed"
                                    : isLocked
                                    ? "Locked"
                                    : "Open"}
                                </button>

                              </div>

                            </div>


                            {/* CONNECTOR LINE */}
                            {index !==
                              unitTopics.length - 1 && (

                              <div
                                style={{
                                  width: "2px",

                                  height: "18px",

                                  background:
                                    "rgba(124,92,255,0.35)",

                                  marginLeft:
                                    "24px",

                                  marginTop:
                                    "4px",

                                  marginBottom:
                                    "4px",
                                }}
                              />

                            )}

                          </div>

                        );
                      }
                    )}

                  </div>

                </div>

              );
            })}

          </div>

        )}

      </div>

    </AppLayout>
  );
}

export default Grammar;