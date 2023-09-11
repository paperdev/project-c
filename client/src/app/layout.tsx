import '@/css/globals.css';
import TemplateHome from '@/components/template/home';

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
      </body>
    </html>
  );
}
