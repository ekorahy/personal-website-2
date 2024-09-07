import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/templates/Header";
import { raleway } from "@/fonts/fonts";
import Main from "@/components/templates/Main";
import Footer from "@/components/templates/Footer";
import { ThemeProvider } from "@/components/atoms/ThemeProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | EKSA",
    default: "EKSA | Personal Website",
  },
  icons: "light-logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} relative bg-zinc-50 text-zinc-950 transition-all duration-1000 ease-in-out dark:bg-zinc-950 dark:text-zinc-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
