"use client";

const aiFeatures = [
  { icon: "🔍", color: "rgba(0,229,160,0.1)", border: "rgba(0,229,160,0.2)", title: "Anomaly detection", desc: "Catches unusual spending before it becomes a pattern. Flags subscriptions you forgot about." },
  { icon: "📈", color: "rgba(56,182,255,0.1)", border: "rgba(56,182,255,0.2)", title: "Trend analysis", desc: "Compares this month to last month, last quarter, last year. Shows you the direction you're heading." },
  { icon: "🎯", color: "rgba(124,107,255,0.1)", border: "rgba(124,107,255,0.2)", title: "Actionable advice", desc: "Never 'spend less on coffee'. Always a specific number, a specific category, a specific action." },
  { icon: "⚡", color: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.2)", title: "Real-time updates", desc: "Every time you spend, Arkonomy recalculates your position and updates your insights." },
];

export function AISection() {
  return (
    <section id="ai" style={{ padding: "90px 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 12, color: "var(--purple)", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Intelligence at the core</div>
        <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, letterSpacing: -1, lineHeight: 1.2 }}>
          AI that works for you,<br />not around you
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginTop: 60 }}>

          {/* AI Demo */}
          <div style={{ background: "var(--surface)", border: "1px solid rgba(124,107,255,0.25)", borderRadius: "var(--radius-lg)", padding: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, paddingBottom: 18, borderBottom: "1px solid var(--border)" }}>
              <div style={{ width: 8, height: 8, background: "var(--green)", borderRadius: "50%" }} />
              <span style={{ fontSize: 13, color: "var(--text2)", fontWeight: 500 }}>Arkonomy AI · Powered by Claude</span>
            </div>

            <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 32, height: 32,
                background: "rgba(124,107,255,0.15)",
                border: "1px solid rgba(124,107,255,0.3)",
                borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 12, fontWeight: 700, color: "var(--purple)"
              }}>⊙</div>
              <div style={{
                background: "var(--bg3)", border: "1px solid var(--border)",
                borderRadius: "0 12px 12px 12px", padding: "14px 16px",
                fontSize: 14, color: "var(--text2)", lineHeight: 1.6, fontWeight: 300
              }}>
                You overspent <strong style={{ color: "var(--red)" }}>$320 this month</strong>.<br />
                Transport hit <span style={{ color: "var(--amber)" }}>$590</span> — that's $190 above your usual.<br />
                Most of it: rideshare on Friday and Saturday nights.<br /><br />
                Switch to public transit twice a week → save{" "}
                <strong style={{ color: "var(--green)" }}>$120/month</strong> — that's $1,440 a year.
                <div style={{ marginTop: 12 }}>
                  <span style={{
                    display: "inline-block",
                    background: "linear-gradient(90deg,var(--purple),var(--blue))",
                    borderRadius: 8, padding: "8px 16px", fontSize: 13,
                    color: "#fff", fontWeight: 600, cursor: "pointer"
                  }}>→ Create a transport budget</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {aiFeatures.map((f) => (
              <div key={f.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  width: 42, height: 42, background: f.color,
                  border: `1px solid ${f.border}`,
                  borderRadius: 12, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 18, flexShrink: 0
                }}>{f.icon}</div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{f.title}</h4>
                  <p style={{ fontSize: 13, color: "var(--text2)", fontWeight: 300, lineHeight: 1.55 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
