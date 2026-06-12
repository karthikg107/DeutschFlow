import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

import "../styles/speaking.css";

function Speak() {
  const levels = [
    {
      level: "a1",
      title: "A1 Beginner",
      description:
        "Basic introductions, family, food and daily life."
    },
    {
      level: "a2",
      title: "A2 Elementary",
      description:
        "Travel, shopping and everyday conversations."
    },
    {
      level: "b1",
      title: "B1 Intermediate",
      description:
        "Opinions, work, studies and real discussions."
    }
  ];

  return (
    <AppLayout>

      <div className="speaking-page">

        <h1>
          🗣 Speaking Practice
        </h1>

        <p>
          Choose your German speaking level.
        </p>

        <div className="speaking-levels">

          {levels.map((item) => (
            <Link
              key={item.level}
              to={`/speaking/${item.level}`}
              className="speaking-level-card"
            >
              <div className="level-content">

                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>

                <span className="level-arrow">
                  →
                </span>

              </div>
            </Link>
          ))}

        </div>

      </div>

    </AppLayout>
  );
}

export default Speak;