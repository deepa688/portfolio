import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
import { fullName, profile } from "@/content/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans",
});

const description = `${fullName}, ${profile.title.toLowerCase()} in emergency and intensive care at ${profile.employer}, Kathmandu. Individualised nursing care built around comfort, safety, autonomy and dignity.`;

export const metadata: Metadata = {
  title: `${fullName}, ${profile.credential} — ${profile.title}`,
  description,
  openGraph: {
    title: `${fullName}, ${profile.credential} — ${profile.title}`,
    description,
    type: "profile",
  },
};

/** Without JS nothing animates, so everything animated must start visible. */
const noScriptCss = `
.rise,.load{opacity:1;transform:none;animation:none}
.dot-canvas{display:none}
`.trim();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="color-scheme" content="light dark" />
        <ThemeScript />
        <noscript>
          <style>{noScriptCss}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
