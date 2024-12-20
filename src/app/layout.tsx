import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Container, Toolbar } from "@mui/material";
import "./globals.css";
import Image from "next/image";
import logo from '@/../public/logo-masa-round.svg'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Masa Gourmand",
  description: "Empanadas Masa",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={roboto.variable}>
        <ThemeProvider theme={theme}>
          <NextIntlClientProvider messages={messages}>
            <div style={{ position: 'absolute', width: '100%' }}>
              <Container maxWidth="md">
                <Toolbar>
                  <Image src={logo} alt='' width={120} style={{ marginLeft: '-80px' }}></Image>
                </Toolbar>
              </Container>
            </div>
            
            <AppRouterCacheProvider options={{ key: 'css' }}>
              <Container maxWidth="md">
                {children}
              </Container>    
            </AppRouterCacheProvider>
            
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
