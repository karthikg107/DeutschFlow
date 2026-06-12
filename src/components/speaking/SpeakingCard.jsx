function SpeakingCard({
  scenario,
  onStart,
}) {
  return (
    <div className="speaking-card">
      <div className="speaking-card-top">
        <h3>{scenario.title}</h3>

        <span className="difficulty-badge">
          {scenario.difficulty}
        </span>
      </div>

      <p>{scenario.prompt}</p>

      <button
        className="start-btn"
        onClick={() => onStart(scenario)}
      >
        Start Practice
      </button>
    </div>
  );
}

export default SpeakingCard;