import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import { Wrench } from "lucide-react";
import "../styles/vocabulary.css";

function VocabularyQuiz() {
  return (
    <AppLayout>
      <div className="vocab-page">
        <PageHeader
          backTo="/vocabulary"
          backLabel="Vocabulary"
          title="Vocabulary Quiz"
          subtitle="Test yourself on your saved words."
        />

        <div className="vocab-coming-soon">
          <div className="vocab-coming-icon">
            <Wrench size={28} strokeWidth={1.5} />
          </div>
          <h2>Coming Soon</h2>
          <p>
            Vocabulary quizzes are in development. In the meantime,
            browse your word lists and save words you want to review.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}

export default VocabularyQuiz;
