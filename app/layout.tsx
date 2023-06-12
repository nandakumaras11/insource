import { NavBar } from '@/Components/NavBar/NavBar'
import './globals.css'
import { Outfit } from 'next/font/google'
import { Suspense } from 'react';
import Loading from "./loading"
import Footer from '@/Components/Footer/Footer';
const inter = Outfit({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Insource Global',
  description: 'Insource Global',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <NavBar />
          {children}
          <Footer/>
        </Suspense>
      </body>
    </html>
  )
}
