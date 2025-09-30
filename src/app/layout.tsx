import { schibsted } from "./ui/fonts";
import "./globals.css";
import Image from "next/image";
import treeFooter from '../../public/assets/tree-footer.png';
import Header from "./components/Header";

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
        <Header />
        <div className="layout-container">
          <main className="min-h-screen pt-20">
            {children}
          </main>
          
          <footer>
            <Image
              aria-hidden
              src={treeFooter}
              alt="Forest art"
              width={8000}
              height={913}
            />
            <div className="text-center py-4 text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
