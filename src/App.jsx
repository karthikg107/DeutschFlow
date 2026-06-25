import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";

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
import TalkWithMia from "./pages/TalkWithMia";
import Settings from "./pages/Settings";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";


// 🔥 NEW IMPORT
import Grammar from "./pages/Grammar";

function App() {
  return (
    <ErrorBoundary>
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

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
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
  path="/speaking/scenarios/:level/:id"
  element={
    <ProtectedRoute>
      <ScenarioPractice />
    </ProtectedRoute>
  }
/>

<Route
  path="/speaking/talk-with-mia"
  element={
    <ProtectedRoute>
      <TalkWithMia />
    </ProtectedRoute>
  }
/>

<Route path="/settings" 
       element={<Settings />} />

<Route path="/pricing" element={<Pricing />} />

<Route path="/privacy" element={<Privacy />} />

<Route path="/terms" element={<Terms />} />

<Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;