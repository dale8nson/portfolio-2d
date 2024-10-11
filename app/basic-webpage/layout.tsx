'use client'
import { ReactNode } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export default function Layout({ children }: {children: ReactNode}) {
  return (
      <section className="flex-col min-h-screen bg-white">
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </section>
  )
}