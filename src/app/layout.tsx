import './globals.css'
import type { Metadata } from 'next'
import { NavbarTop, NavbarBottom } from '@/components/navbar';
import Loading from '@/loading';
import { Suspense } from 'react';
import { Inter } from 'next/font/google'
import { CONSTANT } from '@/lib/contant';

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
        <div className={`flex flex-col mx-auto h-screen ${CONSTANT.desktopWidth} `}>
          <NavbarTop>
          </NavbarTop>

          <div className={`flex-1 overflow-y-scroll ${CONSTANT.desktopWidth}`}>
            <Suspense fallback={<Loading></Loading>}>
                {children}
            </Suspense>
          </div>

          <NavbarBottom>
          </NavbarBottom>
        </div>
      </body>
    </html>
  )
}
