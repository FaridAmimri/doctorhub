/** @format */

import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/_components/Header'
import QueryProvider from '@/_components/QueryProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find your doctor',
  description: 'Find & Book an appointment with your doctor'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
