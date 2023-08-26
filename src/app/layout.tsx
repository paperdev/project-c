import './globals.css'
import type { Metadata } from 'next'
import { NavbarTop, NavbarBottom } from '@/components/navbar';
import Loading from '@/loading';
import { Suspense } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'hello title',
  description: 'hello description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <body>
          <NavbarTop>
          </NavbarTop>

          <Suspense fallback={<Loading></Loading>}>
              {children}
          </Suspense>

          <NavbarBottom>
          </NavbarBottom>
      </body>
    </html>
  )
}
