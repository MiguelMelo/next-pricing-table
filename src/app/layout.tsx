import { Titillium_Web } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "#boraCodar - Pricing Table",
  description: "Pricing table challenge app powered with Next",
};

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={titillium.className}>
      <body>{children}</body>
    </html>
  );
}
