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

// 🔥 NEW IMPORT
import Grammar from "./pages/Grammar";

function App() {
  return (
    <BrowserRouter>

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
  path="/saved-vocabulary"
  element={
    <ProtectedRoute>
      <SavedVocabulary />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;