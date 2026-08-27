import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coresetup.studio"),
  title: "CoreSetup Studio - Premium Websites für Unternehmen in Berlin",
  description:
    "CoreSetup Studio baut Premium-Websites für Unternehmen in Berlin: Design, Entwicklung, Hosting, Sicherheit und Support aus einer Hand.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    title: "CoreSetup Studio - Premium Websites für Unternehmen in Berlin",
    description:
      "Websites, die Vertrauen aufbauen und Kundenanfragen generieren. Design, Hosting, Sicherheit und Support aus einer Hand.",
    locale: "de_DE",
    images: ["/og-cover.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#08080a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-canvas text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-on-gold"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
