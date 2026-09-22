import "./globals.css";
import Header from "./components/Header";
import { Montserrat_Alternates, Albert_Sans } from 'next/font/google';
import type { RootLayoutProps } from '@/app/types';


const montserratAlternates = Montserrat_Alternates({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify required weights
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat-alternates'
});

const albertSans = Albert_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-albert-sans',
});

export default function RootLayout( {children} : RootLayoutProps) {
  return (
    <html
      lang="en"
    >
      <head>
        <title>PrintForge</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${montserratAlternates.variable} ${albertSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
