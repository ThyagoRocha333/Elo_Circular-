import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EloCircular | Coleta de lixo eletrônico",
  description: "Plataforma e app do coletor para governança circular de lixo eletrônico."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
