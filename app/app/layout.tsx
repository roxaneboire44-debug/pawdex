import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PawDex — Crée le Pokédex de ton animal",
  description:
    "Découvre les stats cachées de ton animal : vitesse, odorat, intelligence, camouflage... Génère sa carte de collection unique et défie tes amis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
