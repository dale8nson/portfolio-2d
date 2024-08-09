'use client'
import Image from "next/image";
import Hero from "@/components/Hero";

export const dynamic='force-dynamic'

export default function Home() {
  return (
    <main className="min-h-full flex-col p-1">
      <Hero />
    </main>
  );
}
