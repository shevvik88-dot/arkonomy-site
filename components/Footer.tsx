export function Footer() {
  return (
    <footer style={{ padding: "40px 5%", borderTop: "1px solid var(--border)" }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16
      }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text2)" }}>Arkonomy</div>

        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Contact", href: "mailto:hello@arkonomy.com" },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{
              fontSize: 13, color: "var(--text3)", textDecoration: "none"
            }}>
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ fontSize: 13, color: "var(--text3)" }}>
          © {new Date().getFullYear()} Arkonomy
        </div>
      </div>
    </footer>
  );
}
