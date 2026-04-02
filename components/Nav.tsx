"use client";

export function Nav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 5%", height: "64px", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(8,12,16,0.82)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--border)"
    }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: 600, color: "var(--text)", textDecoration: "none" }}>
        <div style={{
          width: 32, height: 32, background: "linear-gradient(135deg,#22c55e,#0ea5e9)",
          borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, fontWeight: 700, color: "#080c10"
        }}>A</div>
        Arkonomy
      </a>

      <ul style={{ display: "flex", gap: 28, listStyle: "none" }}>
        {["Features", "App", "AI", "Pricing"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{ color: "var(--text2)", textDecoration: "none", fontSize: 14 }}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a href="https://app.arkonomy.com" style={{
        background: "var(--green)", color: "#080c10", border: "none",
        padding: "8px 20px", borderRadius: 50, fontSize: 14, fontWeight: 600,
        cursor: "pointer", textDecoration: "none"
      }}>
        Get Started
      </a>
    </nav>
  );
}
