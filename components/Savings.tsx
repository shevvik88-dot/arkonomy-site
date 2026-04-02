const roundups = [
  { icon: "☕", name: "Blue Bottle", spent: "$3.60 spent", saved: "+$0.40" },
  { icon: "🛒", name: "Trader Joe's", spent: "$47.30 spent", saved: "+$0.70" },
  { icon: "⛽", name: "Shell Gas", spent: "$54.20 spent", saved: "+$0.80" },
  { icon: "🎵", name: "Spotify", spent: "$11.99 spent", saved: "+$0.01" },
];

export function Savings() {
  return (
    <section id="savings" style={{ padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 12, color: "var(--green)", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Save small, build big</div>
        <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 600, letterSpacing: -1, lineHeight: 1.2 }}>
          Your money grows<br />while you live your life
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginTop: 60 }}>
          <div>
            <p style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.65, fontWeight: 300, marginBottom: 28 }}>
              Round-ups and micro-savings — the small amounts you never notice, automatically moving toward the things that matter.
            </p>
            <p style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.65, fontWeight: 300 }}>
              A $3.60 coffee becomes $4.00, and $0.40 goes to savings. It adds up faster than you think.
            </p>
          </div>

          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 30 }}>
            <div style={{ fontSize: 12, color: "var(--text3)", fontWeight: 600, letterSpacing: ".8px", textTransform: "uppercase", marginBottom: 20 }}>
              Today's round-ups
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {roundups.map((r) => (
                <div key={r.name} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 14px", background: "var(--bg3)", borderRadius: 10
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 16 }}>{r.icon}</span>
                    <div>
                      <div style={{ fontSize: 13, color: "var(--text)", fontWeight: 500 }}>{r.name}</div>
                      <div style={{ fontSize: 11, color: "var(--text3)" }}>{r.spent}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--green)" }}>{r.saved}</div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 16, padding: 16,
              background: "linear-gradient(135deg,rgba(34,197,94,0.1),rgba(56,189,248,0.06))",
              border: "1px solid rgba(34,197,94,0.2)", borderRadius: 10,
              display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
              <span style={{ fontSize: 13, color: "var(--text2)" }}>Saved today</span>
              <span style={{ fontSize: 20, fontWeight: 600, color: "var(--green)", letterSpacing: "-.5px" }}>+$1.91</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
