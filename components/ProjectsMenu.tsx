import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"

export const ProjectsMenu = () => {

  useGSAP(() => {
    
  })

  return (
    <ul id="projects-menu" className="absolute left-0 top-[13vh] w-[10%] h-[90vh] z-10 space-y-1 bg-[#ee0000] bg-opacity-50">
  <li>
    <a href="#" className="block rounded-lg  backdrop-blur-[10px] px-4 py-2 text-sm font-medium text-white">
      Basic Webpage
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Teams
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Billing
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Invoices
    </a>
  </li>

  <li>
    <a
      href="#"
      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      Account
    </a>
  </li>
</ul>
  )
}