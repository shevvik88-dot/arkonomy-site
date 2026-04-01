import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arkonomy — AI-Powered Personal Finance",
  description: "Take control of your money without thinking about it. AI-powered financial assistant that tracks spending, analyzes patterns, and delivers real insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
