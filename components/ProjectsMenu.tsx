import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"
import Link from "next/link"

export const ProjectsMenu = () => {

  // useGSAP(() => {
  //   const pm = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#projects-menu",
  //       start: "top top",
  //       end: "+=500",
  //       scrub: true,
  //       markers: true
  //     }
  //   })

  //   pm.set("#projects-menu", {
  //     x: -300,
  //     y: 50,
  //     immediateRender: true
  //   })

  //   pm.to("#projects-menu",
  //     {
  //       x: 73,
  //       y: 50
  //     }
  //   )

  //   pm.to("#projects-menu",
  //     {
  //       y: 0,
  //       x: 48,
  //       boxShadow: "0px 25px 50px 12px rgb(238 0 0 / 0.25)",
        
  //     }
  //   )
  // })

  return (
    <div id="projects-menu" className="absolute top-[13vh] w-[18%] pt-5 h-[90vh] z-50 space-y-1 backdrop-blur-md bg-opacity-25 pl-10 ">
      <ul>
    <li>
      <Link href="#" className="block rounded-lg backdrop-blur-[10px] px-4 py-2 text-sm font-medium text-white hover:text-[#ee0000]">
        Basic Webpage
      </Link>
    </li>
  
    <li>
      <Link
        href="#"
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        Shader Effect
      </Link>
    </li>
  
    <li>
      <Link
        href="#"
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        Realtime Shopping List
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >  
      </Link>
    </li>
  
    <li>
      <Link
        href="#"
        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
      >
        
      </Link>
    </li>
  </ul>
    </div>
  )
}