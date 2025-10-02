import { schibsted } from './ui/fonts'
import './globals.css'
import Image from 'next/image'
import treeFooter from '../../public/assets/tree-footer-w.png'
import Header from './components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cheyenne Smith - Designer & Developer',
  description:
    'Portfolio of Cheyenne Smith - Designer, Developer, and Creator specializing in user experience design and development.',
  keywords: 'designer, developer, portfolio, ux, ui, web design',
  openGraph: {
    title: 'Cheyenne Smith - Designer & Developer',
    description:
      'Portfolio of Cheyenne Smith - Designer, Developer, and Creator.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibsted.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 overflow-hidden pt-20 lg:pt-0">{children}</main>
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
