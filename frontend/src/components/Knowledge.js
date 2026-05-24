const diseases = [
  {
    emoji: "😣",
    name: "Acne",
    desc: "Caused by clogged pores and excess oil. Common in teens and young adults.",
    tip: "Use salicylic acid cleanser",
    color: "#FF8C69",
  },
  {
    emoji: "🔴",
    name: "Eczema",
    desc: "Causes itchy, inflamed, and dry skin patches. Often triggered by allergens.",
    tip: "Moisturize daily, avoid triggers",
    color: "#FF6B9D",
  },
  {
    emoji: "🩹",
    name: "Psoriasis",
    desc: "Autoimmune disease causing rapid skin cell buildup, forming silvery scales.",
    tip: "Topical steroids can help",
    color: "#845EC2",
  },
  {
    emoji: "🌹",
    name: "Rosacea",
    desc: "Causes redness, visible blood vessels, and sometimes pimples on the face.",
    tip: "Avoid triggers like sun and alcohol",
    color: "#E84393",
  },
  {
    emoji: "🔵",
    name: "Vitiligo",
    desc: "Loss of skin pigment in patches. Caused by autoimmune attack on melanocytes.",
    tip: "Sunscreen on depigmented areas",
    color: "#4D96FF",
  },
  {
    emoji: "🟤",
    name: "Melanoma",
    desc: "Serious form of skin cancer from UV damage. Early detection is critical.",
    tip: "Annual skin checks recommended",
    color: "#FF9A3C",
  },
];

function Knowledge() {
  return (
    <section className="knowledge" id="knowledge">
      <div className="section-header">
        <div className="section-badge">📚 Awareness</div>
        <h2>Skin Disease Knowledge</h2>
        <p>Learn about common skin conditions DermAI can detect</p>
      </div>

      <div className="knowledge-grid">
        {diseases.map((d) => (
          <div className="knowledge-card" key={d.name}>
            <div className="k-emoji" style={{ background: d.color + "20" }}>
              {d.emoji}
            </div>
            <h3>{d.name}</h3>
            <p>{d.desc}</p>
            <div className="k-tip">
              <span>💡</span> {d.tip}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Knowledge;