import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SettleMesh | Payment Integration Infrastructure",
  description: "SettleMesh is developing an integration layer connecting digital-currency payment providers with existing physical POS and online checkout systems.",
  metadataBase: new URL("https://settlemesh.co.uk"),
  openGraph: {
    title: "SettleMesh | Digital payments. Everyday commerce.",
    description: "A proposed UK payment-integration layer for existing physical and online checkout systems.",
    url: "https://settlemesh.co.uk",
    siteName: "SettleMesh",
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
