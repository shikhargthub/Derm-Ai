const tips = [
  { emoji: "💧", title: "Stay Hydrated", desc: "Drink 8+ glasses of water daily. Hydration keeps skin plump, clear, and elastic." },
  { emoji: "🌞", title: "Use Sunscreen", desc: "Apply SPF 30+ every morning, even on cloudy days. Sun damage is the #1 cause of premature aging." },
  { emoji: "🥗", title: "Eat Clean", desc: "Reduce oily and processed food. A diet rich in vitamins A, C, and E directly improves skin health." },
  { emoji: "🫧", title: "Wash Gently", desc: "Use a mild, fragrance-free cleanser twice a day. Over-washing strips your skin's natural oils." },
  { emoji: "😴", title: "Sleep Well", desc: "Aim for 7–9 hours. During sleep, your skin repairs damaged cells and produces collagen." },
  { emoji: "🧴", title: "Moisturize Daily", desc: "Apply moisturizer right after washing. Choose products suited to your skin type — dry, oily, or combination." },
  { emoji: "🚭", title: "Avoid Smoking", desc: "Smoking accelerates skin aging and causes wrinkles by reducing blood flow to skin cells." },
  { emoji: "🧘", title: "Manage Stress", desc: "High stress triggers cortisol spikes that cause acne and flare-ups. Try meditation or light exercise." },
];

function Tips() {
  return (
    <section className="tips" id="tips">
      <div className="section-header">
        <div className="section-badge">✨ Wellness</div>
        <h2>Skin Care Tips</h2>
        <p>Simple habits that make a big difference for your skin every day</p>
      </div>

      <div className="tips-grid">
        {tips.map((tip) => (
          <div className="tip-card" key={tip.title}>
            <div className="tip-emoji">{tip.emoji}</div>
            <h4>{tip.title}</h4>
            <p>{tip.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tips;