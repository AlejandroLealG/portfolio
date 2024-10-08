import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import AOSInitializer from "@/utils/AOSInitializer"; // Importar el inicializador de AOS

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Mis proyectos",
  description: "Porfolio de Alejandro Leal Gonzalez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo_2.className}>
        <AOSInitializer /> {/* Inicializa AOS */}
        {children}
      </body>
    </html>
  );
}

