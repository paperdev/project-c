import './globals.css'
import type { Metadata } from 'next'
import Navbar from './navbar';

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
    <html suppressHydrationWarning>
      <body>
        <div>
          <Navbar>
          </Navbar>
        </div>
        
        <div>
            {children}
        </div>
      </body>
    </html>
  )
}
