//import { Inter } from "next/google-fonts"; // Correct import statement
import "./globals.css";
import Script from 'next/script';

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Balmy World",
  description: "Balmy world selling the best tongue drum in the universe", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://www.clarity.ms/tag/lpz3nj1935"
        strategy="afterInteractive"
      />
    </html>
  );
}
