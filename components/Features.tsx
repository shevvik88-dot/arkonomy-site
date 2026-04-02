"use client";

const features = [
  { icon: "📊", title: "Automatic tracking", color: "var(--green-glow)", border: "rgba(0,229,160,0.15)", desc: "Connect your accounts once. Every transaction is categorized and tracked in real time — no manual entry ever." },
  { icon: "⊙", title: "AI that actually thinks", color: "var(--purple-glow)", border: "rgba(124,107,255,0.2)", desc: "Not generic advice. Real analysis of your patterns, anomalies, and habits. Insights specific to you.", purple: true },
  { icon: "💰", title: "Smart saving suggestions", color: "var(--green-glow)", border: "rgba(0,229,160,0.15)", desc: "Arkonomy identifies where you can save based on your actual spending history — not a template budget." },
  { icon: "📅", title: "Monthly comparisons", color: "var(--blue-glow)", border: "rgba(56,182,255,0.15)", desc: "See exactly how this month compares to last. Spot trends before they become problems.", blue: true },
];

export function Features() {
  return (
    <section id="features" style={{ padding: "90px 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 12, color: "var(--green)", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>
          Built for real life
        </div>
        <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, letterSpacing: -1, lineHeight: 1.2, marginBottom: 16 }}>
          Everything you need.<br />Nothing you don't.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginTop: 56 }}>
          {features.map((f) => (
            <div key={f.title} style={{
              background: "var(--surface)", border: `1px solid ${f.border}`,
              borderRadius: "var(--radius)", padding: 28,
              transition: "border-color .25s"
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: f.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18, fontSize: f.icon === "⊙" ? 20 : 18,
                color: f.purple ? "var(--purple)" : f.blue ? "var(--blue)" : "var(--green)",
                fontWeight: 700, border: `1px solid ${f.border}`
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
