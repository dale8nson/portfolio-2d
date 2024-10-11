import type { Metadata } from "next";
import { Flex, Heading } from '@radix-ui/themes'
import Navigation from '@/components/Navigation'
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { mainTheme } from "@/themes";

export const metadata: Metadata = {
  title: "Dale Hutchinson | Web Developer",
  description: "A portfolio website to showcase my skills as a web developer",
  authors: {
    name: "Dale Hutchinson",
    url: "daletristanhutchinson.com"
  },
  keywords: [
    "web developer",
    "developer",
    "software",
    "coding",
    "programming",
    "sql",
    "nosql",
    "mongodb",
    "postgresql",
    "portfolio",
    "reactJS",
    "nextJS",
    "next.js",
    "threeJS",
    "webGL",
    "framer motion",
    "framer motion 3D",
    "GSAP",
    "3D",
    "webgl",
    "opengl",
    "GLSL",
    "apple",
    "macintosh",
    "mac",
    ".NET",
    "C#",
    "web app",
    "Melbourne",
    "Victoria",
    "Australia",
    "freelance",
    "C",
    "C++",
    "Swift"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* <ThemeModeScript /> */}
        </head>
        <body className="bg-black text-[#ee0000]">
          <Flex className="min-w-screen min-h-screen">
            <header className='flex bg-white rounded-b-md'>
            </header>
            {children}
          </Flex>
        </body>
      </html>
  )
}
