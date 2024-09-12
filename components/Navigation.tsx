import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { mainTheme } from "@/themes";


export default function Navigation() {
  return (
    <Navbar theme={mainTheme.navbar} fluid rounded className="sticky top-0 left-0 w-screen z-50">
      <NavbarBrand as={Link} href="/">
        <img src="/DTH logo.png" className="mr-3 h-12 w-12" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">daleTristanHutchinson.com</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Projects</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
