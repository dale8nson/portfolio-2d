
"use client"
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs"

export default function () {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://daletristanhutchinson.com"
              src="/DTH Logo.png"
              alt="Dale Tristan Hutchinson Logo"
              name="daleTristanHutchinson"
              className='[&_a]:text-[#ee0000]'
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Profile</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Projects" />
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link href="github.com/dale8nson">Github</Footer.Link>
                <Footer.Link href="#">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full md:flex sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="daleTristanHutchinson.com" year={new Date().getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 md:justify-center sm:justify-center">
            <Footer.Icon href="#" icon={BsLinkedin} color="#ee0000" />
            <Footer.Icon href="https://github.com/dale8nson" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
