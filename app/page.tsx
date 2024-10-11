'use client'
import Image from "next/image";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { About } from "@/components/About";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import { Projects } from "../components/Projects"

gsap.registerPlugin(ScrollTrigger, TextPlugin, useGSAP);

// export const dynamic='force-dynamic'

export default function Home() {

  // useGSAP(() => {

    // const tl = gsap.timeline()
    // const panels = gsap.utils.toArray("#about .panel")
    // const horizontalScroll = gsap.to(panels, {
    //   xPercent: -100 * (panels.length - 1),
    //   ease: "none"
    // })

    // ScrollTrigger.create({
    //   animation: horizontalScroll,
    //   trigger: "#about",
    //   start: "top top",
    //   end: "+=100%",
    //   scrub: true,
    //   pin: true,
    //   markers: true,
    // })

    // gsap.from(".fade-down", {
    //   opacity: 0,
    //   y: "-100%",
    //   duration: .25,
    //   ease: "none",
    //   scrollTrigger: {
    //     // containerAnimation: horizontalScroll,
    //     trigger: ".fade-down",
    //     // toggleActions: "restart reverse restart reverse",
    //     start: "bottom 70%",
    //     end: "+=200",
    //     scrub: true,
    //     markers: true
    //   }
    // })

    // gsap.from(".fade-up", {
    //   opacity: 0,
    //   y: "100%",
    //   ease: "none",
    //   scrollTrigger: {
    //     // containerAnimation: horizontalScroll,
    //     trigger: ".fade-up",
    //     // toggleActions: "restart reverse restart reverse",
    //     start: "top center",
    //     end: "center center",
    //     scrub: true
    //   }
    // })
    
  //   tl.to('#about-heading', {
  //     text: 'ABOUT',
  //     scrollTrigger: {
  //       containerAnimation: horizontalScroll,
  //       trigger: "#about-heading",
  //       start: "top top",
  //       end: "bottom center",
  //       toggleActions: "restart reverse restart reverse",
  //       scrub: true
  //     }
  //   })

  //   tl.to("#tech-heading",
  //     {
  //       text: 'TECHNOLOGIES I USE',
  //       scrollTrigger: {
  //         containerAnimation: horizontalScroll,
  //         trigger: "#tech-heading",
  //         start: "left 50%",
  //         end: "+=300",
  //         toggleActions: "restart reverse restart reverse",
  //         scrub: true
  //       }
  //     }, "<")
  // })

  // useGSAP(() => {
  //   gsap.to(".background", {
  //     y: -1000,
  //     opacity: 1,
  //     scrollTrigger: {
  //       trigger: "#projects",
  //       scrub: true,
  //       start: "top bottom",
  //       end: 6000
  //     }
  //   })

  // })

  return (
    <main className="relative min-h-full flex-col items-center justify-items-center p-1 m-auto overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Image alt="background" src="/pexels-lilartsy-1563519.jpg" width={4000} height={6000} className="background origin-center -z-10 fixed top-[35%] scale-200 opacity-0" />
      <Projects />
      <Footer />
    </main>
  )
}
