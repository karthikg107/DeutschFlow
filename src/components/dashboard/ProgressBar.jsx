function ProgressBar({ skill, percent }) {
  return (
    <div className="progress-box">
      <div className="progress-top">
        <span>{skill}</span>
        <span>{percent}%</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;