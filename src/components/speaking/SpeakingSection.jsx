function SpeakingSection({
  title,
  children
}) {
  return (
    <section className="section-card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default SpeakingSection;