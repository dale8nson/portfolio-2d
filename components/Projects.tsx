
import { gsap } from "gsap/gsap-core"
import { PixiPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react"
import { ProjectsMenu } from "./ProjectsMenu";
import * as PIXI from 'pixi.js';
import Image from "next/image";

gsap.registerPlugin(PixiPlugin)
PixiPlugin.registerPIXI(PIXI)

export const Projects = () => {

  useGSAP(() => {
    
    gsap.from("#projects .panel",
      {
        y: "100vh",
        pixi: {
          blur: 5
        },
        scrollTrigger: {
          trigger: "#projects",
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: true
        }
      }
    )
    gsap.from("#projects .panel h2", 
      {
        filter: "blur(5px)",
        scrollTrigger: {
          // containerAnimation: projectsScroll,
          trigger: "#projects .panel",
          start: "-60% center",
          end: "+=65",
          scrub: true,
          // markers: true
        }
        
      }
    )

    gsap.from("#projects-menu",
      {
        x: "-150px",
        scrollTrigger: {
          trigger:"#projects",
          start: "top 10%",
          end: "+=150",
          scrub: true,
          markers: true
        }
      }
    )
  })

  return (
    <section id="projects" className="relative z-30 w-screen h-screen flex bg-[#ee0000] justify-center bg-opacity-50 m-0 text-white">
      <ProjectsMenu />
      <div className="flex-col align-middle items-center justify-items-center">
        <div className="relative w-screen flex drop-shadow-2xl shadow-transparent  backdrop-blur-md z-40 pt-8 pb-4">
            <h2 className="text-6xl mx-auto font-[futura]">PROJECTS</h2>
        </div>
        <div id="basic-webpage" className="panel relative  z-20 translate-y-[-100vh] !w-[80vw] !h-[70vh] ml-auto mr-[5%] bg-black bg-opacity-50 ">
          <div className="flex justify-start p-4">
            <h2 id="bw-heading" className="text-5xl">Basic Webpage</h2>
          </div>
          <div className="flex m-4">
            <Image alt="basic webpage" className="size-1/6 object-contain" src="/basic-webpage.png" width="2940" height="1616" /></div>
        </div>
      </div>
    </section>
  )
}