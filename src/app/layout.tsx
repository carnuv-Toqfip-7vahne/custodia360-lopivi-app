import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Chatbot from './components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Custodia360 - Cumplimiento LOPIVI en 72 horas',
  description: 'Primera empresa con un sistema automatizado de España. Implementamos toda la normativa LOPIVI y planes de protección en 72 horas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main>
          {children}
        </main>
        <Chatbot />
      </body>
    </html>
  )
}
