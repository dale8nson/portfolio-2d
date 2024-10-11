
import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all";
import { ProjectsMenu } from "./ProjectsMenu";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {

  // useGSAP(() => {

  //   const panels: gsap.TweenTarget[] = gsap.utils.toArray("#projects .panel")

  //   const panelHeadings = gsap.utils.toArray("#projects .panel h2")

  //   const tl = gsap.timeline({
  //     // scrollTrigger: {
  //     //   trigger: "#projects",
  //     //   start: "top top",
  //     //   // endTrigger: "#basic-webpage",
  //     //   end: `+=5000`,
  //     //   scrub: true,
  //     //   pin: true,
  //     //   markers: true
  //     // }
  //   })

  //   tl.set("#projects", {
  //     y: 0
  //   })

  //   tl.set("#projects-header", {
  //     y: -108,
  //     boxShadow: "0px 25px 50px -12px rgb(238 0 0 / 0)",

  //   })

  //   tl.set("#projects-header h2", {
  //     y: 0,
  //     x: 25
  //   })

  //   tl.set("#basic-webpage", {
  //     y: "100vh"
  //   })

  //   tl.to("#projects-header", {
  //     y: 0,
  //     scrollTrigger: {
  //       trigger: "#projects-header",
  //       start: "top bottom",
  //       end: "+=108",
  //       scrub: true,
  //       // pin: true
  //     }
  //   })

  //   // tl.to("#projects-header h2", {
  //   //   y: 25,
  //   //   scrollTrigger: {
  //   //     trigger: "#projects-header h2",
  //   //     start: "top 108",
  //   //     scrub: true
  //   //   }
  //   // })

  //   // tl.to("#projects-header h2", {
  //   //   x: 0,
  //   //   y: 0,
  //   // })

  //   // tl.to("#projects-header", {
  //   //   boxShadow: "0px 25px 50px -12px rgb(238 0 0 / 0.25)"
  //   // }, "<")

  //   // tl.to("#basic-webpage", {
  //   //   y: "-100vh"
  //   // })
  // })

  return (
    <section id="projects" aria-label="projects" className="relative z-30 w-screen  h-screen  bg-[#ee0000] bg-opacity-25 m-0 text-white">
      {/* <ProjectsMenu /> */}
      <div className="flex-col align-middle items-center justify-items-center mx-0 w-full">
        <div id="projects-header" className="absolute top-0 left-0 w-screen flex backdrop-blur-md z-40 pt-8 pb-4 mx-0">
          <h2 className="text-6xl mx-auto font-[futura]">PROJECTS</h2>
        </div>
        <div id="basic-webpage" className="panel relative z-20 !w-[80vw] !h-[70vh] ml-auto mr-[3.5%] bg-black shadow-[#ee0000] shadow-2xl bg-opacity-50 flex-col">
          <div className="flex-col p-8">
            <h2 id="bw-heading" className="text-5xl">Basic Webpage</h2>
            <hr className="heading-underline blur-[5px] border-white border-solid border-1 text-white my-2 w-0" />
          </div>
          <div className="m-auto flex w-full h-full justify-items-center justify-center align-middle gap-x-8 px-8">
            <div className="flex flex-col w-full h-full lg:flex-row justify-center justify-items-center align-middle cursor-default gap-x-8">
              <div className="mx-auto w-full flex-0">
                <Link href="/basic-webpage" className="m-auto cursor-default">
                  <Image alt="basic webpage" className="m-auto size-3/4 object-contain cursor-pointer" src="/basic-webpage.png" width="2940" height="1616" />
                </Link>
              </div>
              <div className="m-auto w-full flex-0">
                <p className="w-full m-auto">
                  This is an example of a simple static webpage, reconstructed from the Ableton website. It contains the essential ingredients of all modern commerce-focused sites: a top navigation bar, hero, photos, embedded media, footer, and a separate dropdown menu on mobile versions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}