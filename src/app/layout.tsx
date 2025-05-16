// import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';
import { SiteMetaData } from '@/config/meta';
import ChakraUIProvider from '@/provider/';

export const metadata: Metadata = {
  title: {
    absolute: SiteMetaData.name,
    template: `%s`,
  },
  description: SiteMetaData.description,
  keywords: SiteMetaData.keywords,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  viewportFit: 'contain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='/favicon.png' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body style={{ backgroundColor: '#fff' }}>
        <ChakraUIProvider>
          {/* <Navigation /> */}
          {children}
          {/* <Footer /> */}
        </ChakraUIProvider>
      </body>
    </html>
  );
}
