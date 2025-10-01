import { schibsted } from './ui/fonts'
import './globals.css'
import Image from 'next/image'
import treeFooter from '../../public/assets/tree-footer.png'
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
        <div className="layout-container">
          <main className="h-full pt-10">{children}</main>
          <footer>
            <div className="align-center justify-center">
              <Image
                aria-hidden
                src={treeFooter}
                alt="Forest art"
                width={8000}
                height={913}
              />
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
