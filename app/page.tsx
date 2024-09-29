'use client'
import Image from "next/image";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { About } from "@/components/About";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { Projects } from "../components/Projects"

export const dynamic='force-dynamic'

export default function Home() {

  useGSAP(() => {
    gsap.to(".background", {
      y: -1000,
      scrollTrigger: {
        trigger: "#projects",
        scrub: true,
        start: "top bottom",
        end: 6000
      }
    })

  })

  return (
    <main className="relative min-h-full flex-col p-1 m-0 overflow-x-hidden">
      <Navigation />
      <Hero />
      <About/>
      <Image alt="background" src="/pexels-lilartsy-1563519.jpg" width={4000} height={6000} className="background origin-center -z-10 fixed top-[45%] scale-200" />
      <Projects />
      <Footer />
      
    </main>
  )
}
