import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/templates/Header";
import { raleway } from "@/fonts/fonts";
import Main from "@/components/templates/Main";
import Footer from "@/components/templates/Footer";

export const metadata: Metadata = {
  title: "EKSA",
  icons: "light-logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} relative bg-zinc-50`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
