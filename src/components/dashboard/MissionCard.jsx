function MissionCard({ missions }) {
  return (
    <div className="mission-card">
      <h2>Daily Missions 🎯</h2>

      {missions.map((item, index) => (
        <div key={index} className="mission-item">
          ⬜ {item}
        </div>
      ))}

      <button className="elite-btn">Claim +75 XP</button>
    </div>
  );
}

export default MissionCard;