"use client"
import Link from "next/link";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { mainTheme } from "@/themes";


export default function Navigation() {
  return (
    <Navbar theme={mainTheme.navbar} rounded className="sticky flex top-0 justify-between left-0 w-screen z-50">
      <NavbarBrand className="flex"  href="/">
        <Image src="/DTH_Logo.png" width={224} height={228} className="mr-3 h-12 w-12" alt="Dale Hutchinson Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">daleTristanHutchinson.com</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="flex">
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <button onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}>
          About
        </button>
        <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>Projects</button>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
