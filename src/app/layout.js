import { Inter } from "next/font/google";
import "./globals.css";  // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diadem Shoe Page",
  description: "Diadem Court Burst",
};

import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-base-content">
        <Header />
        {children}
      </body>
    </html>
  );
}