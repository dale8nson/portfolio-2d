import {
  Footer as FBFooter,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { abletonTheme } from "@/themes";
import Link from "next/link";

export function Footer() {

  const { footer: theme } = abletonTheme
  console.log('footer: ', theme)
  return (
    <FBFooter theme={theme} container className='mt-16'>
      <div className='md:w-[80vw] mx-auto flex-col'>
        <div className='w-full ml-0 mr-auto mt-16'>
          <h1 className="text-6xl font-[futura-bold] text-black">Ableton</h1>
        </div>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterLinkGroup col>
                  <FooterLink theme={theme?.groupLink?.link} className='arrow text-lg' as={Link} href="#">Register Live or Push</FooterLink>
                  <FooterLink className='arrow text-lg' theme={theme?.groupLink?.link} href="#">About Ableton</FooterLink>
                  <FooterLink className='arrow text-lg' theme={theme?.groupLink?.link} href="#">Jobs</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Education" />
                <FooterLinkGroup col>
                  <FooterLink theme={theme?.groupLink?.link} className='text-lg' as={Link} href="#">Offers for students and teachers</FooterLink>
                  <FooterLink className='text-lg' theme={theme?.groupLink?.link} href="#">Ableton for the classroom</FooterLink>
                  <FooterLink className=' text-lg' theme={theme?.groupLink?.link} href="#">Ableton for colleges and universities</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Sign up for our newsletter" />
              </div>
              <div>

                <FooterTitle title="Community" />
                <FooterLinkGroup col>
                  <FooterLink className='text-lg' theme={theme?.groupLink?.link} href="#">Find Ableton User Groups
                  </FooterLink>
                  <FooterLink className=' text-lg' theme={theme?.groupLink?.link} href="#">Find Certified Training</FooterLink>
                  <FooterLink theme={theme?.groupLink?.link} className='text-lg' as={Link} href="#">Become a Certified Trainer</FooterLink>
                </FooterLinkGroup>
              </div>

              <div>
                <FooterTitle title="Follow us" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Github</FooterLink>
                  <FooterLink href="#">Discord</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </div>
    </FBFooter>
  );
}
