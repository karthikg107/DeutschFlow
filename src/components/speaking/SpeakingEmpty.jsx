function SpeakingEmpty({
  title,
  text
}) {
  return (
    <div className="speaking-card disabled">

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}

export default SpeakingEmpty;