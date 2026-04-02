"use client";

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
        <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, letterSpacing: -1, lineHeight: 1.2 }}>
          Your money grows<br />while you live your life
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", marginTop: 60 }}>
          <div>
            <p style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.65, fontWeight: 300, marginBottom: 28 }}>
              Round-ups and micro-savings — the small amounts you never notice, automatically moving toward the things that matter.
            </p>
            <p style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.65, fontWeight: 300, marginBottom: 36 }}>
              A $3.60 coffee becomes $4.00, and $0.40 goes to savings. It adds up faster than you think.
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 42, height: 42, background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💡</div>
              <p style={{ fontSize: 14, color: "var(--text2)", fontWeight: 300 }}>
                <span style={{ color: "var(--green)", fontWeight: 600 }}>~$107/month</span> in spare change at 1x multiplier — <span style={{ color: "var(--text2)" }}>$1,284/year without noticing</span>
              </p>
            </div>
          </div>

          <div style={{ background: "var(--surface)", border: "1px solid rgba(0,229,160,0.2)", borderRadius: "var(--radius-lg)", padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: "var(--text3)", fontWeight: 600, letterSpacing: ".8px", textTransform: "uppercase" }}>
                Spare change from your spending
              </div>
              <div style={{ fontSize: 10, background: "rgba(0,229,160,0.1)", border: "1px solid rgba(0,229,160,0.2)", borderRadius: 50, padding: "3px 10px", color: "var(--green)", fontWeight: 600 }}>
                Today
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {roundups.map((r) => (
                <div key={r.name} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 14px", background: "var(--bg3)", borderRadius: 10,
                  border: "1px solid var(--border)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 30, height: 30, background: "rgba(0,229,160,0.08)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, border: "1px solid rgba(0,229,160,0.15)" }}>
                      {r.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, color: "var(--text)", fontWeight: 500 }}>{r.name}</div>
                      <div style={{ fontSize: 10, color: "var(--text3)" }}>{r.spent}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--green)" }}>{r.saved}</div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 14, padding: "14px 16px",
              background: "rgba(0,229,160,0.08)",
              border: "1px solid rgba(0,229,160,0.2)", borderRadius: 10,
              display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
              <span style={{ fontSize: 13, color: "var(--text2)" }}>Saved today</span>
              <span style={{ fontSize: 20, fontWeight: 700, color: "var(--green)", letterSpacing: "-.5px" }}>+$1.91</span>
            </div>

            <div style={{
              marginTop: 12,
              background: "linear-gradient(90deg,var(--green),var(--blue))",
              borderRadius: 10, padding: "11px 0", textAlign: "center",
              fontSize: 14, fontWeight: 600, color: "#0d1117", cursor: "pointer"
            }}>
              ↗ Invest via Alpaca
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
