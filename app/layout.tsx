import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akshaj Piri — ML Engineer & Data Scientist',
  description:
    'Portfolio of Akshaj Piri, ML Engineer and Data Scientist based in Bangalore, India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-zinc-50`}>
        {children}
      </body>
    </html>
  )
}
