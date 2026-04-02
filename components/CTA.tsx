"use client";

export function CTA() {
  return (
    <section style={{ padding: "90px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          background: "var(--surface)",
          border: "1px solid rgba(0,229,160,0.2)",
          borderRadius: "var(--radius-lg)",
          padding: "70px 60px", textAlign: "center",
          position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: "-40%", left: "50%", transform: "translateX(-50%)",
            width: 600, height: 400,
            background: "radial-gradient(ellipse,rgba(0,229,160,0.08) 0%,rgba(124,107,255,0.05) 40%,transparent 70%)",
            pointerEvents: "none"
          }} />

          {/* Logo */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24, position: "relative" }}>
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#131c2e"/>
              <polygon points="16,6 26,24 6,24" fill="none" stroke="#00e5a0" strokeWidth="2" strokeLinejoin="round"/>
              <circle cx="16" cy="23" r="2" fill="#00e5a0"/>
            </svg>
          </div>

          <h2 style={{
            fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 700, letterSpacing: -1.5,
            marginBottom: 16, position: "relative"
          }}>
            Start building better<br />financial habits today
          </h2>
          <p style={{
            fontSize: 17, color: "var(--text2)", marginBottom: 40,
            fontWeight: 300, position: "relative", maxWidth: 480, margin: "0 auto 40px"
          }}>
            No credit card. No setup fee. Just your finances, finally under control.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <a href="https://app.arkonomy.com" style={{
              background: "var(--green)", color: "#0d1117",
              padding: "15px 36px", borderRadius: 50, fontSize: 16, fontWeight: 700,
              textDecoration: "none", display: "inline-block"
            }}>
              Get Started — it's free
            </a>
            <a href="#preview" style={{
              background: "transparent", color: "var(--text)",
              border: "1px solid var(--border2)",
              padding: "15px 36px", borderRadius: 50, fontSize: 16, fontWeight: 500,
              textDecoration: "none", display: "inline-block"
            }}>
              View Demo
            </a>
          </div>

          <p style={{ fontSize: 13, color: "var(--text3)", marginTop: 24, position: "relative" }}>
            Powered by Claude · Bank-level security via Plaid
          </p>
        </div>
      </div>
    </section>
  );
}
