"use client";

export function Footer() {
  return (
    <footer style={{ padding: "40px 5%", borderTop: "1px solid var(--border)", background: "var(--bg2)" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#131c2e"/>
            <polygon points="16,6 26,24 6,24" fill="none" stroke="#00e5a0" strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="16" cy="23" r="2" fill="#00e5a0"/>
          </svg>
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text2)" }}>Arkonomy</span>
        </a>

        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Contact", href: "mailto:hello@arkonomy.com" },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{
              fontSize: 13, color: "var(--text3)", textDecoration: "none",
              transition: "color .2s"
            }}>
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ fontSize: 13, color: "var(--text3)" }}>
          © {new Date().getFullYear()} Arkonomy · AI Financial Autopilot
        </div>
      </div>
    </footer>
  );
}
