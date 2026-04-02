"use client";

const features = [
  { icon: "📊", title: "Automatic tracking", color: "var(--green-glow)", desc: "Connect your accounts once. Every transaction is categorized and tracked in real time — no manual entry ever." },
  { icon: "✦", title: "AI that actually thinks", color: "var(--blue-glow)", desc: "Not generic advice. Real analysis of your patterns, anomalies, and habits. Insights that are specific to you." },
  { icon: "💰", title: "Smart saving suggestions", color: "var(--green-glow)", desc: "Arkonomy identifies where you can save based on your actual spending history — not a template budget." },
  { icon: "📅", title: "Monthly comparisons", color: "var(--blue-glow)", desc: "See exactly how this month compares to last. Spot trends before they become problems." },
];

export function Features() {
  return (
    <section id="features" style={{ padding: "90px 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 12, color: "var(--green)", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
          Built for real life
        </div>
        <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 600, letterSpacing: -1, lineHeight: 1.2, marginBottom: 16 }}>
          Everything you need.<br />Nothing you don't.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginTop: 56 }}>
          {features.map((f) => (
            <div key={f.title} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius)", padding: 28
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12, background: f.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18, fontSize: 18
              }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, color: "var(--text)" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.6, fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
