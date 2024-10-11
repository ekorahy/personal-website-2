import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/templates/Header";
import { raleway } from "@/fonts/fonts";
import Main from "@/components/templates/Main";
import Footer from "@/components/templates/Footer";
import { ThemeProvider } from "@/components/atoms/ThemeProvider";
import ButtonScrollToTop from "@/components/atoms/ButtonScrollToTop";

export const metadata: Metadata = {
  title: {
    template: "%s | Ekorahy",
    default: "Ekorahy | Personal Website",
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
        className={`${raleway.className} scrollbar relative bg-white text-zinc-950 transition-all duration-1000 ease-in-out dark:bg-zinc-950 dark:text-white`}
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
