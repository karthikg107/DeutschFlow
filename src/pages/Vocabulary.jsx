import { Link } from "react-router-dom";


import AppLayout from "../components/Layout/AppLayout";

import { useEffect, useState } from "react";
import api from "../utils/api";

function Vocabulary() {

  const isMobile =
  window.innerWidth < 768;

  const [savedCount, setSavedCount] =
  useState(0);

  useEffect(() => {

  fetchSavedCount();

}, []);

const fetchSavedCount =
  async () => {

    try {

      const response =
        await api.get(
          "/vocabulary/saved"
        );

      setSavedCount(
        response.data.length
      );

    } catch (error) {

      console.log(error);

    }

};

  const levels = [
  {
    code: "A1",
    title: "Beginner",
    description:
      "Build your foundation with everyday German vocabulary.",
    
    
  },
  {
    code: "A2",
    title: "Elementary",
    description:
      "Expand your vocabulary for daily conversations.",
    
  },
  {
    code: "B1",
    title: "Intermediate",
    description:
      "German for work, university and life in Germany.",
    
  }
];

  return (

    <AppLayout>

      <div
        style={{
          padding:
  isMobile
    ? "20px"
    : "40px",
          color: "white",
          maxWidth: "1200px"
        }}
      >

        <h1
          style={{
            fontSize:
  isMobile
    ? "40px"
    : "48px",
            fontWeight: "700",
            marginBottom: "12px"
          }}
        >
          Vocabulary
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
            fontSize:
  isMobile
    ? "16px"
    : "18px"
          }}
        >
          Build your German vocabulary by level.
        </p>

        <div
  style={{
    display: "grid",
    gridTemplateColumns:
      isMobile
        ? "1fr"
        : "1fr 420px",
    gap: "18px",
    alignItems: "start"
  }}
>

          {/* LEFT COLUMN */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >

            {levels.map((level) => (

              <Link
                key={level.code}
                to={`/vocabulary/${level.code}`}
              >

                <div
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-3px)";
    e.currentTarget.style.borderColor =
      "rgba(129,140,248,.3)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0)";
    e.currentTarget.style.borderColor =
      "rgba(255,255,255,.08)";
  }}

  style={{
    background:
      "rgba(255,255,255,.04)",

    border:
      "1px solid rgba(255,255,255,.08)",

    borderRadius: "20px",

    padding:
  isMobile
    ? "18px"
    : "22px",

minHeight:
  isMobile
    ? "130px"
    : "150px",

    transition: "all .25s ease",

    cursor: "pointer"
  }}
>

                  <div
                    style={{
                      fontSize:
  isMobile
    ? "28px"
    : "32px",
                      fontWeight: "700",
                      color: "#818cf8"
                    }}
                  >
                    {level.code}
                  </div>

                  <div
                    style={{
                      fontSize:
  isMobile
    ? "18px"
    : "20px",
                      fontWeight: "600",
                      marginTop: "6px"
                    }}
                  >
                    {level.title}
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      color: "#cbd5e1",
                      lineHeight: "1.6"
                    }}
                  >
                    {level.description}
                  </div>

                  

                  <div
                    style={{
                      marginTop: "14px",
                      color: "white",
                      fontWeight: "600"
                    }}
                  >
                    Explore →
                  </div>

                </div>
              

              </Link>

            ))}

          </div>

          {/* RIGHT COLUMN */}

          <Link to="/vocabulary/saved">

  <div
    style={{
      background:
        "linear-gradient(135deg,#312e81,#4338ca)",

      border:
        "1px solid rgba(255,255,255,.08)",

      borderRadius: "24px",

      padding:
  isMobile
    ? "22px"
    : "30px",

minHeight:
  isMobile
    ? "180px"
    : "220px",

      display: "flex",

      flexDirection: "column",

      justifyContent: "space-between"
    }}
  >

    <div>

      <div
        style={{
          display: "flex",
flexDirection:
  isMobile
    ? "column"
    : "row",

justifyContent: "space-between",

alignItems:
  isMobile
    ? "flex-start"
    : "flex-start",
          marginBottom: "24px"
        }}
      >

        <div>

          <div
            style={{
              fontSize:
  isMobile
    ? "24px"
    : "28px",
              fontWeight: "700"
            }}
          >
            Saved Vocabulary
          </div>

          <div
            style={{
              marginTop: "10px",
              color:
                "rgba(255,255,255,.85)",
              lineHeight: "1.7"
            }}
          >
            Review vocabulary you have
            bookmarked from all levels.
          </div>

        </div>

        <div
  style={{
    textAlign:
      isMobile
        ? "left"
        : "right"
  }}
>

          <div
  style={{
    color: "rgba(255,255,255,.75)",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "18px"
  }}
>
  {savedCount} saved words
</div>


        </div>

      </div>

    </div>

    <div
      style={{
        fontSize: "18px",
        fontWeight: "600"
      }}
    >
      View Collection →
    </div>

  </div>

</Link>

        </div>

      </div>

      

    </AppLayout>

  );

}

export default Vocabulary;