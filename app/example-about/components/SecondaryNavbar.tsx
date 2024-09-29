'use client'
import { Navbar, NavbarLink } from "flowbite-react";
import Link from "next/link";
import { abletonTheme } from "@/themes";


export function SecondaryNavbar() {

  const {navbar:theme } = abletonTheme

  return (<Navbar theme={theme} className=" slide-up flex z-20 bg-[#ffffffcc] align-middle mx-0 !my-0 p-6 opacity-2 marker:content-[none] [&_div]:flex [&_div]:justify-start [&_div]:mx-6 [&_div]:font-bold [&_div]:space-x-4 font-[futura] [&_a]:text-[14px] md:[&_div]:my-0 sticky top-0">
    <NavbarLink as={Link} active href='/example-about'>About</NavbarLink>
    <NavbarLink as={Link} href='#'>Jobs</NavbarLink>
    <NavbarLink as={Link} href='#'>Apprenticeships</NavbarLink>
  </Navbar>)
}