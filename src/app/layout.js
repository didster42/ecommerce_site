import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import "./globals.css";
import { Providers } from "./state/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce App",
  description: "An app for few pages of an ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
