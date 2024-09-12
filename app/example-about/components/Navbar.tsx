import Link from "next/link";
import { Navbar as Bar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, HR } from "flowbite-react";
import Image from "next/image";
import { abletonTheme } from "@/themes";

export function Navbar() {
  const { navbar: theme } = abletonTheme
  return (
    <>
      <Bar theme={theme} className="font-[20px] align-middle font-[futura]" fluid>
        <NavbarBrand as={Link} href="#">
          <Image src="/ableton-hallmark.ef5355379032.svg" className="m-auto h-[60px] w-[60px] md:h-9" alt="Ableton Logo" width='60' height='60' />
        </NavbarBrand>
        <NavbarCollapse className="flex w-screen [&_ul]:flex [&_ul]:justify-between [&_ul]:w-[90vw]">
          <div className="flex space-x-4">
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
          <div className="flex justify-self-end space-x-10">
            <NavbarLink as={Link} href='#' className="text-[#0000ff] text-[18px]">Try Live 12 for free</NavbarLink>
            <NavbarLink as={Link} href='#' className="text-[15px] text-black">Log in or register</NavbarLink>
          </div>
        </NavbarCollapse>
        <NavbarToggle className="self-center" />
      </Bar>
      <HR className="my-4" />
    </>
  );
}
