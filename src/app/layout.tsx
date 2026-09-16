import type { Metadata } from "next";
import { Bitter, Karla } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://amplie-chef-amplie-chef-site.sxelg2.easypanel.host";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amplie Chef — Sistema de gestão para cafeterias e restaurantes",
  description:
    "Cardápio online, PDV, comandas, cozinha (KDS), caixa, estoque e emissão fiscal em um só sistema. Conheça o Amplie Chef e organize a operação do seu restaurante ou cafeteria.",
  openGraph: {
    title: "Amplie Chef — Sistema de gestão para cafeterias e restaurantes",
    description:
      "Cardápio online, PDV, comandas, cozinha (KDS), caixa, estoque e emissão fiscal em um só sistema.",
    url: siteUrl,
    siteName: "Amplie Chef",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amplie Chef — Sistema de gestão para cafeterias e restaurantes",
    description:
      "Cardápio online, PDV, comandas, cozinha (KDS), caixa, estoque e emissão fiscal em um só sistema.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${bitter.variable} ${karla.variable}`}>
      <body className="min-h-screen bg-[#F6F1EA] text-stone-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
