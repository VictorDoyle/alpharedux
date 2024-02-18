import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Providers } from "./components/providers";


export const metadata: Metadata = {
  title: "Alpha Redux",
  description: "AlphaRedux's Main Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/icg8xrp.css" />
      </head>
      <body>
        <Navigation />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
