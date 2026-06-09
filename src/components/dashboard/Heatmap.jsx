function Heatmap() {
  const boxes = Array(30).fill(0);

  return (
    <div className="heatmap-card">
      <h2>Practice Activity 🔥</h2>

      <div className="heat-grid">
        {boxes.map((_, index) => (
          <div key={index} className="heat-box"></div>
        ))}
      </div>
    </div>
  );
}

export default Heatmap;