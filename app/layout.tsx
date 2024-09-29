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
    "portfolio",
    "reactJS",
    "nextJS",
    "threeJS",
    "webGL",
    "framer motion",
    "framer motion 3D"
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
