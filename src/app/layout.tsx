import type { Metadata } from "next";
import { schibsted } from "./ui/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibsted.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
