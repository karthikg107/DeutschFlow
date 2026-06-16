import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AITutor from "./pages/AITutor";
import GrammarTopic from "./pages/GrammarTopic";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";
import Vocabulary from "./pages/Vocabulary";
import VocabularyLevel from "./pages/VocabularyLevel";
import VocabularyQuiz from "./pages/VocabularyQuiz";
import SavedVocabulary from "./pages/SavedVocabulary";
import { Toaster } from "react-hot-toast";
import Speak from "./pages/Speak";
import ScenarioPractice from "./pages/ScenarioPractice";
import PronunciationPractice from "./pages/PronunciationPractice";
import PronunciationLevels from "./pages/PronunciationLevels";
import ScenarioLevels from "./pages/ScenarioLevels";
import ScenarioList from "./pages/ScenarioList";


// 🔥 NEW IMPORT
import Grammar from "./pages/Grammar";

function App() {
  return (
    <BrowserRouter>

      <Toaster
  position="bottom-right"
  toastOptions={{
    duration: 2000,
    style: {
      background: "#111827",
      color: "#fff",
      border: "1px solid rgba(255,255,255,.08)",
    },
  }}
/>

      <Routes>

        {/* LANDING */}
        <Route
          path="/"
          element={<Landing />}
        />

        <Route
  path="/login"
  element={<Login />}
/>

        <Route
  path="/register"
  element={<Register />}
/>

        {/* DASHBOARD */}
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        {/* AI TUTOR */}
        <Route
          path="/ai"
          element={<AITutor />}
        />

        {/* GRAMMAR */}
        <Route
          path="/grammar"
          element={<Grammar />}
        />

        {/* GRAMMAR TOPIC */}
        <Route
          path="/grammar/:slug"
          element={<GrammarTopic />}
        />
        
        {/* VOCABULARY */}
        <Route
  path="/vocabulary"
  element={
    <ProtectedRoute>
      <Vocabulary />
    </ProtectedRoute>
  }
/>

<Route
  path="/vocabulary/:level"
  element={
    <ProtectedRoute>
      <VocabularyLevel />
    </ProtectedRoute>
  }
/>

<Route
  path="/vocabulary-quiz"
  element={
    <ProtectedRoute>
      <VocabularyQuiz />
    </ProtectedRoute>
  }
/>

<Route
  path="/vocabulary/saved"
  element={
    <ProtectedRoute>
      <SavedVocabulary />
    </ProtectedRoute>
  }
/>

{/* ======================================
   SPEAKING
====================================== */}

<Route
  path="/speaking"
  element={
    <ProtectedRoute>
      <Speak />
    </ProtectedRoute>
  }
/>

<Route
  path="/speaking/pronunciation"
  element={
    <ProtectedRoute>
      <PronunciationLevels />
    </ProtectedRoute>
  }
/>

<Route
  path="/speaking/pronunciation/:level"
  element={
    <ProtectedRoute>
      <PronunciationPractice />
    </ProtectedRoute>
  }
/>

<Route
  path="/speaking/scenarios"
  element={
    <ProtectedRoute>
      <ScenarioLevels />
    </ProtectedRoute>
  }
/>

<Route
  path="/speaking/scenarios/:level"
  element={
    <ProtectedRoute>
      <ScenarioList />
    </ProtectedRoute>
  }
/>

<Route
  path="/speaking/scenarios/:level/:id"
  element={
    <ProtectedRoute>
      <ScenarioPractice />
    </ProtectedRoute>
  }
/>

<Route
  path="/speaking/free-chat"
  element={
    <ProtectedRoute>
      <AITutor />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;