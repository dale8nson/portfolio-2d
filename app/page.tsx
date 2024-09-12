'use client'
import Image from "next/image";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const dynamic='force-dynamic'

export default function Home() {
  return (
    <main className="min-h-full flex-col p-1">
      <Navigation />
      <Hero />
      <Footer />
    </main>
  )
}
