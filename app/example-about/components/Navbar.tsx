"use client"
import { useState, useRef } from "react";
import Link from "next/link";
import { Navbar as Bar, NavbarBrand, NavbarCollapse, NavbarLink, HR, Button, Drawer } from "flowbite-react";
import Image from "next/image";
import { abletonTheme } from "@/themes";
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, CSSRulePlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const menuOpenAnim = useRef<gsap.core.Tween[]>()

  const handleClose = () => setIsOpen(false)

  const { navbar: theme } = abletonTheme

  useGSAP(() => {
    const slideUp = gsap.to('.slide-up', {
      y: -90,
      duration: 0.5,
      // yoyo: true
    })
    slideUp.pause()

    const slideDown = gsap.to(".slide-down",
      {
        y: 0,
        duration: 0.5
      },
    )
    slideDown.pause()

    // ScrollTrigger.create({
    //   trigger:"#hero",
    //   animation: slideUp,
    //   start:"top top"
    // })

    ScrollTrigger.observe({
      target: window,
      onChangeY: self => {
        console.log("velocityY: ", self.velocityY)
        if (self.velocityY > 1000) {
          slideUp.play()
        } else if (self.velocityY < -1000) {
          slideUp.reverse()
        }
      }
    })

    const afterRule = CSSRulePlugin.getRule("#menu-btn::after")

    menuOpenAnim.current = [gsap.to('.menu-ui',
      {
        fill: "white",
        color: "white",
        duration: 0.5,
        paused: true
      }),
    gsap.fromTo(afterRule,
      {
        cssRule: {
          borderTopColor: "black",
          borderBottomColor: "transparent",
          marginBottom: "-10px",
        },
      },
      {
        cssRule: {
          borderTopColor: "transparent",
          borderBottomColor: "white",
          marginBottom: "0px"
        },
        duration: 0.5,
        paused: true
      })
    ]
  })

  const animateMenu = () => {
    if (!isOpen) menuOpenAnim.current?.forEach(anim => anim.restart())
    else menuOpenAnim.current?.forEach(anim => anim.reverse())
  }

  return (
    <>
      <Bar theme={theme} className="relative z-[60] font-[20px] w-screen items-center align-middle font-[futura] pt-4 mb-5" fluid>
        <NavbarBrand className="relative z-[60]" as={Link} href="#">
          <svg className="menu-ui" x="0px" y="0px"
            width="60" height="28" viewBox="0 0 45 21" enableBackground="new 0 0 45 21" fill="black">
            <g>
              <rect width="3" height="21" />
              <rect x="6" width="3" height="21" />
              <rect x="12" width="3" height="21" />
              <rect x="18" width="3" height="21" />
              <g>
                <rect x="24" y="18" width="21" height="3" />
                <rect x="24" y="12" width="21" height="3" />
                <rect x="24" y="6" width="21" height="3" />
                <rect x="24" width="21" height="3" />
              </g>
            </g>
          </svg>
        </NavbarBrand>
        <NavbarCollapse className="relative z-[50] hidden align-middle items-center self-center lg:flex w-screen [&_ul]:flex [&_ul]:justify-between [&_ul]:w-[90vw]">
          <div className="space-x-2 lg:space-x-4 flex">
            <NavbarLink as={Link} href="#">
              Live
            </NavbarLink>
            <NavbarLink as={Link} href="#">
              Push
            </NavbarLink>
            <NavbarLink as={Link} href="#">Note</NavbarLink>
            <NavbarLink as={Link} href="#">Link</NavbarLink>
            <NavbarLink as={Link} href="#">Shop</NavbarLink>
            <NavbarLink as={Link} href="#">Packs</NavbarLink>
            <NavbarLink as={Link} href="#">Help</NavbarLink>
            <NavbarLink as={Link} href="#" active>More +</NavbarLink>
          </div>
          <div className="flex justify-self-end space-x-10 sm:mr-16 lg:mr-4">
            <NavbarLink as={Link} href='#' className="text-[#0000ff] text-[18px]">Try Live 12 for free</NavbarLink>
            <NavbarLink as={Link} href='#' className="text-[15px] text-black">Log in or register</NavbarLink>
          </div>
        </NavbarCollapse>
        <button id="menu-btn" onClick={() => { setIsOpen(!isOpen); animateMenu() }} type="button" className="menu-ui after:border-t-black md:hidden group relative !z-[60] flex items-stretch justify-center text-center font-medium focus:z-10 focus:outline-none border border-transparent rounded-lg bg-transparent text-black">
          <span className="relative z-[60] flex items-stretch  rounded-md px-4 text-xl font-medium">Menu</span>
        </button>
        <Drawer className="absolute z-[50] !duration-500 bg-[#0000ff] px-0 !pb-32 w-screenh-auto overflow-x-hidden overflow-y-visible [&_*]:text-white" open={isOpen} onClose={handleClose} position="top">
          <Drawer.Items className="translate-y-[13vw] pl-4 flex-col gap-y-4 font-[futura] w-screen text-lg font-normal overflow-x-hidden">
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 mb-8 font-normal">
              <Link href="#">Live</Link>
              <Link href="#">Push</Link>
              <Link href="#">Note</Link>
              <Link href="#">Link</Link>
              <Link href="#">Shop</Link>
              <Link href="#">Packs</Link>
              <Link href="#">Help</Link>
              <Link href='#' className="text-[#0000ff] text-[18px]">Try Live 12 for free</Link>
              <Link href='#' className="text-xs text-black">Log in or register</Link>
              <h3 className="text-xl">More on Ableton.com</h3>
              <Link className="text-xs" href="#">Blog</Link>
              <Link className="text-xs" href="#">Ableton for the classroom</Link>
              <Link className="text-xs" href="#">Ableton for colleges and universities</Link>
              <Link className="text-xs" href="#">Certified training</Link>
              <Link className="text-xs !text-[#fd5948]" href="/example-about">About Ableton</Link>
              <Link className="text-xs" href="#">Jobs</Link>
              <Link className="text-xs" href="#">Apprenticeships</Link>
            </div>
            <div className="flex-col gap-y-4 w-screen overflow-x-hidden">
              <h3 className="text-xl">More from Ableton:</h3>
              <div className="flex w-full columns-3 flex-nowrap overflow-x-scroll gap-y-8">
                <Link className="flex-col  flex-0 text-xs" href="#">
                  <h4 className="text-sm font-medium">Loop</h4>
                  <p className="font-normal">Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
                </Link>
                <Link className="flex-col flex-0 text-xs" href="#">
                  <h4 className="text-sm font-medium">Learning Music</h4>
                  <p className="font-normal">Learn the fundamentals of music making right in your browser.</p>
                  </Link>
                <Link href="#" className="flex-col flex-0 text-xs">
                  <h4 className="text-sm font-medium">Learning Synths</h4>
                  <p className="font-normal">Get started with synthesis using a web-based synth and accompanying lessons.</p>
                </Link>
              </div>
            </div>
          </Drawer.Items>
        </Drawer>
      </Bar >
      <HR className="my-4" />
    </>
  );
}
