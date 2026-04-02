"use client";

export function CTA() {
  return (
    <section style={{ padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg,rgba(34,197,94,0.1) 0%,rgba(56,189,248,0.07) 50%,rgba(8,12,16,0) 100%), var(--surface)",
          border: "1px solid rgba(34,197,94,.2)", borderRadius: "var(--radius-lg)",
          padding: "70px 60px", textAlign: "center", position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: "-40%", left: "50%", transform: "translateX(-50%)",
            width: 500, height: 300,
            background: "radial-gradient(ellipse,rgba(34,197,94,0.12),transparent 70%)",
            pointerEvents: "none"
          }} />

          <h2 style={{
            fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 600, letterSpacing: -1.5,
            marginBottom: 16, position: "relative"
          }}>
            Start building better<br />financial habits today
          </h2>
          <p style={{
            fontSize: 17, color: "var(--text2)", marginBottom: 36,
            fontWeight: 300, position: "relative"
          }}>
            No credit card. No setup fee. Just your finances, finally under control.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <a href="https://app.arkonomy.com" style={{
              background: "var(--green)", color: "#080c10", border: "none",
              padding: "15px 36px", borderRadius: 50, fontSize: 16, fontWeight: 600,
              cursor: "pointer", textDecoration: "none", display: "inline-block"
            }}>
              Get Started — it's free
            </a>
            <a href="#preview" style={{
              background: "transparent", color: "var(--text)",
              border: "1px solid var(--border2)",
              padding: "15px 36px", borderRadius: 50, fontSize: 16, fontWeight: 500,
              cursor: "pointer", textDecoration: "none", display: "inline-block"
            }}>
              View Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
