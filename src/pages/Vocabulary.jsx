import { Link } from "react-router-dom";

import AppLayout from
  "../components/Layout/AppLayout";

function Vocabulary() {

  return (

    <AppLayout>

      <div className="page">

        <h1>
          Vocabulary Levels
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px"
          }}
        >

          <Link to="/vocabulary/A1">
            A1 Vocabulary
          </Link>

          <Link to="/vocabulary/A2">
            A2 Vocabulary
          </Link>

        </div>

      </div>

    </AppLayout>

  );

}

export default Vocabulary;