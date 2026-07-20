import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VerifyRit — Real-time email validation",
  description: "VerifyRit checks every address the moment you need to know — syntax, domain, and mailbox — so you send with proof, not a guess.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
