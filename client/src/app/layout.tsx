import '@/css/globals.css';
import TemplateHome from '@/components/template/home';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark' >
      <body>
        <TemplateHome>
          {children}
        </TemplateHome>
        {
          process.env.SERVER_TYPE === 'prod' && <Analytics/>
        }
        
      </body>
    </html>
  );
}
