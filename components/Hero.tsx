export function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "100px 5% 80px", position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)",
        width: 800, height: 500,
        background: "radial-gradient(ellipse,rgba(34,197,94,0.07) 0%,rgba(56,189,248,0.04) 40%,transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80,
        alignItems: "center", maxWidth: 1200, margin: "0 auto", width: "100%"
      }}>
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--surface)", border: "1px solid var(--border2)",
            borderRadius: 50, padding: "6px 14px", fontSize: 12,
            color: "var(--green)", fontWeight: 500, marginBottom: 24, letterSpacing: ".5px"
          }}>
            <div style={{ width: 6, height: 6, background: "var(--green)", borderRadius: "50%" }} />
            AI-Powered Finance
          </div>

          <h1 style={{
            fontSize: "clamp(36px,4vw,58px)", fontWeight: 600, lineHeight: 1.12,
            letterSpacing: "-1.5px", color: "var(--text)", marginBottom: 20
          }}>
            Take control of your money{" "}
            <span style={{
              background: "linear-gradient(90deg,#22c55e,#38bdf8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              without thinking about it
            </span>
          </h1>

          <p style={{
            fontSize: 17, color: "var(--text2)", lineHeight: 1.65,
            maxWidth: 440, marginBottom: 40, fontWeight: 300
          }}>
            Arkonomy tracks your spending, analyzes patterns, and delivers real AI insights — not generic tips. Built for your actual financial life.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="https://app.arkonomy.com" style={{
              background: "var(--green)", color: "#080c10", border: "none",
              padding: "13px 28px", borderRadius: 50, fontSize: 15, fontWeight: 600,
              cursor: "pointer", textDecoration: "none", display: "inline-block"
            }}>
              Get Started →
            </a>
            <a href="#preview" style={{
              background: "transparent", color: "var(--text)",
              border: "1px solid var(--border2)",
              padding: "13px 28px", borderRadius: 50, fontSize: 15, fontWeight: 500,
              cursor: "pointer", textDecoration: "none", display: "inline-block"
            }}>
              View Demo
            </a>
          </div>
        </div>

        {/* Phone mockup */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div style={{
            width: 260, background: "var(--bg3)", border: "1px solid var(--border2)",
            borderRadius: 38, padding: 16,
            boxShadow: "0 0 80px rgba(34,197,94,0.08), 0 40px 80px rgba(0,0,0,.5)"
          }}>
            <div style={{ width: 80, height: 6, background: "var(--border2)", borderRadius: 3, margin: "0 auto 20px" }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--text3)", fontFamily: "DM Mono, monospace" }}>TOTAL BALANCE</div>
                <div style={{ fontSize: 28, fontWeight: 600, color: "var(--text)", letterSpacing: -1, marginTop: 2 }}>$4,820</div>
                <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2
