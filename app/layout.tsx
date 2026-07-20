import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteMobileMenu from "@/components/SiteMobileMenu";
import SiteFooter from "@/components/SiteFooter";
import SiteScripts from "@/components/SiteScripts";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000")
  ),
  title: "Une Empreinte - Cadres personnalisés pour bébés",
  description:
    "Une Empreinte — cadres personnalisés pour bébé, naissance et famille. Créez des souvenirs inoubliables avec des créations uniques et de qualité.",
  icons: { icon: "/U (1).png", apple: "/U (1).png" },
  openGraph: {
    type: "website",
    title: "Une Empreinte — Cadres personnalisés pour bébés",
    description:
      "Créez des souvenirs inoubliables avec nos cadres personnalisés pour bébé, naissance et famille.",
    images: ["/image/empreinte.PNG"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Une Empreinte — Cadres personnalisés pour bébés",
    description:
      "Créez des souvenirs inoubliables avec nos cadres personnalisés pour bébé, naissance et famille.",
    images: ["/image/empreinte.PNG"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteHeader />
        <SiteMobileMenu />
        {children}
        <SiteFooter />
        <SiteScripts />
      </body>
    </html>
  );
}
