/** @format */

import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/_components/Header'
import Footer from '@/_components/Footer'
import AuthProvider from '@/_components/AuthProvider'
import QueryProvider from '@/_components/QueryProvider'
import { Toaster } from 'sonner'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doctor Hub',
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
        <AuthProvider>
          <QueryProvider>
            <Header />
            {children}
            <Toaster />
            <Footer />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
