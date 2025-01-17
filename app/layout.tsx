import type { Metadata } from "next";
// import {Bowlby_One_SC, DM_Mono} from 'next/font/google'
import {Bowlby_One_SC, DM_Mono} from 'next/font/google'

import "./globals.css"
import Header from "./components/Header";
import { SVGFilters } from "./components/SVGFilters";

const bowlby = Bowlby_One_SC({
  subsets: ['latin'],
  display: 'swap',
  weight:'400',
  variable: '--font-bowlby',
})


const dmMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight:'500',
  variable: '--font-dmMono',
})

export const metadata: Metadata = {
  title: "SkaterBoard",
  description: "Bounce and flip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased`}
        >
       <main>
        <Header/>
        {children}
      </main>
      <SVGFilters/>
      </body>
      
    </html>
  );
}
