import './styles/globals.css'
import Logo from './logo'
// font set: https://fonts.google.com/share?selection.family=Brygada%2B1918:ital,wght@0,400;0,700;1,400;1,700%7CIBM%2BPlex%2BMono:ital,wght@0,300;0,700;1,300;1,700%7CPublic%2BSans:ital,wght@0,100;0,300;0,700;1,100;1,300;1,700

import { Besley, IBM_Plex_Mono, Public_Sans } from 'next/font/google'

// const font_serif = Brygada_1918({
//   subsets: ['latin'],
//   weight: 'variable',
//   style: ['normal', 'italic'],
//   display: 'swap',
//   variable: '--font-brygada',
//   adjustFontFallback: false,
// })
 
const font_serif = Besley({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-besley',
  adjustFontFallback: false,
})
 
const font_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-plex-mono',
})

const font_sans = Public_Sans({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-public-sans',
})

import { EXAMPLE_PATH, CMS_NAME, BASE_URL } from '@/lib/constants'
import Head from 'next/head'

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <Logo></Logo>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${font_serif.variable} ${font_mono.variable} ${font_sans.variable}`}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  )
}
