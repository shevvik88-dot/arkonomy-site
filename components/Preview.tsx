"use client";

const transactions = [
  { icon: "☕", name: "Blue Bottle Coffee", date: "Today · Food & Drink", amount: "-$8.50", neg: true },
  { icon: "🏥", name: "CVS Pharmacy", date: "Yesterday · Health", amount: "-$34.20", neg: true },
  { icon: "🎵", name: "Spotify", date: "Mar 28 · Subscriptions", amount: "-$11.99", neg: true },
  { icon: "💰", name: "Direct Deposit", date: "Mar 25 · Income", amount: "+$3,200", neg: false },
];

const steps = [
  { n: "01", title: "Connect your accounts", desc: "Bank, credit cards, savings — all in one place. Secure, read-only access via Plaid." },
  { n: "02", title: "Track automatically", desc: "Every transaction categorized and logged. No setup, no manual work." },
  { n: "03", title: "Get AI insights and improve", desc: "Arkonomy analyzes your patterns and tells you exactly what to do next." },
];

export function Preview() {
  return (
    <section id="preview" style={{ padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 12, color: "var(--green)", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Real product</div>
        <h2 style={{ fontSize: "clamp(28px,3vw,42px)", fontWeight: 700, letterSpacing: -1, lineHeight: 1.2 }}>The app, not a brochure</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start", marginTop: 60 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Transactions */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 20 }}>
              <div style={{ fontSize: 11, color: "var(--text3)", fontWeight: 600, letterSpacing: ".8px", textTransform: "uppercase", marginBottom: 14 }}>Transactions</div>
              {transactions.map((tx) => (
                <div key={tx.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width: 32, height: 32, background: tx.neg ? "rgba(255,107,107,0.1)" : "rgba(0,229,160,0.1)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, border: `1px solid ${tx.neg ? "rgba(255,107,107,0.2)" : "rgba(0,229,160,0.2)"}` }}>{tx.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, color: "var(--text)", fontWeight: 500 }}>{tx.name}</div>
                    <div style={{ fontSize: 10, color: "var(--text3)" }}>{tx.date}</div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: tx.neg ? "var(--red)" : "var(--green)" }}>{tx.amount}</div>
                </div>
              ))}
            </div>

            {/* AI Insight */}
            <div style={{ background: "rgba(124,107,255,0.08)", border: "1px solid rgba(124,107,255,0.25)", borderRadius: "var(--radius)", padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", border: "1.5px solid var(--purple)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "var(--purple)", fontWeight: 700 }}>⊙</div>
                <span style={{ fontSize: 11, color: "var(--purple)", fontWeight: 600, letterSpacing: ".5px" }}>AI INSIGHT</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.55, marginBottom: 14, fontWeight: 500 }}>
                You overspent <span style={{ color: "var(--red)" }}>$320 this month</span>. Transport hit <span style={{ color: "var(--amber)" }}>$590</span> — well above your $400 usual.
              </p>
              <div style={{ background: "linear-gradient(90deg,var(--purple),var(--blue))", borderRadius: 8, padding: "9px 16px", fontSize: 13, color: "#fff", fontWeight: 600, cursor: "pointer", textAlign: "center" }}>
                → Reduce by $120 next month
              </div>
            </div>

            {/* Savings */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 20 }}>
              <div style={{ fontSize: 11, color: "var(--text3)", fontWeight: 600, letterSpacing: ".8px", textTransform: "uppercase", marginBottom: 14 }}>Vacation Fund</div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: "var(--text2)" }}>Saved</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>$1,240 / $3,000</span>
              </div>
              <div style={{ height: 5, background: "var(--surface2)", borderRadius: 3, overflow: "hidden", marginBottom: 12 }}>
                <div style={{ height: "100%", width: "41%", background: "linear-gradient(90deg,var(--green),var(--blue))", borderRadius: 3 }} />
              </div>
              <div style={{ fontSize: 12, color: "var(--text3)" }}>At this pace — July 2026</div>
            </div>
          </div>

          {/* Steps */}
          <div style={{ paddingTop: 20 }}>
            <p style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.65, fontWeight: 300, marginBottom: 36 }}>
              Every screen built with clarity in mind. Your finances visible at a glance — not buried in menus.
            </p>
            {steps.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: 20, marginBottom: 32 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "var(--surface)", border: "1px solid rgba(0,229,160,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 600, color: "var(--green)", flexShrink: 0,
                  fontFamily: "DM Mono, monospace"
                }}>{s.n}</div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 5 }}>{s.title}</h4>
                  <p style={{ fontSize: 14, color: "var(--text2)", fontWeight: 300, lineHeight: 1.55 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
