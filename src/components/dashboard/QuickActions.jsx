function QuickActions() {
  const actions = [
    "Translate",
    "AI Chat",
    "Vocabulary",
    "Speaking Room",
    "Grammar Battle",
    "Exam Mode",
  ];

  return (
    <div className="quick-card">
      <h2>Quick Launch 🚀</h2>

      <div className="quick-grid">
        {actions.map((item, index) => (
          <button key={index} className="quick-btn">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;