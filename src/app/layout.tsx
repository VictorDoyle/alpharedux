import "./globals.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/navigation/Footer";
import { Providers } from "./components/themes/providers";



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
