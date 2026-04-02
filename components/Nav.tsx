"use client";

export function Nav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 5%", height: "64px", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(13,17,23,0.85)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--border)"
    }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "18px", fontWeight: 600, color: "var(--text)", textDecoration: "none" }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#131c2e"/>
          <polygon points="16,6 26,24 6,24" fill="none" stroke="#00e5a0" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="16" cy="23" r="2" fill="#00e5a0"/>
        </svg>
        Arkonomy
      </a>

      <ul style={{ display: "flex", gap: 28, listStyle: "none" }}>
        {[
          { label: "Features", href: "#features" },
          { label: "App", href: "#preview" },
          { label: "AI", href: "#ai" },
          { label: "Pricing", href: "#pricing" },
        ].map((item) => (
          <li key={item.label}>
            <a href={item.href} style={{ color: "var(--text2)", textDecoration: "none", fontSize: 14, transition: "color .2s" }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="https://app.arkonomy.com" style={{
        background: "var(--green)", color: "#0d1117", border: "none",
        padding: "8px 20px", borderRadius: 50, fontSize: 14, fontWeight: 600,
        cursor: "pointer", textDecoration: "none"
      }}>
        Get Started
      </a>
    </nav>
  );
}
