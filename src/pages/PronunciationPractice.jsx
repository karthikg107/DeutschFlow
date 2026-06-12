import { useParams } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

function PronunciationPractice() {
  const { level } = useParams();

  return (
    <AppLayout>
      <div className="speaking-page">
        <h1>
          {level.toUpperCase()} Pronunciation Practice
        </h1>

        <p>
          Pronunciation feature coming soon.
        </p>
      </div>
    </AppLayout>
  );
}

export default PronunciationPractice;