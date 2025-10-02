'use client'

import { schibsted } from './ui/fonts'
import './globals.css'
import Image from 'next/image'
import treeFooter from '../../public/assets/tree-footer-w.png'
import Header from './components/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${schibsted.className} antialiased`}>
        <Header />
        <main className="layout-container">{children}</main>
        <footer>
          <div className="footer-image-container">
            <Image
              aria-hidden
              src={treeFooter}
              alt="Forest art"
              width={1000}
              height={300}
            />
          </div>
        </footer>
      </body>
    </html>
  )
}
