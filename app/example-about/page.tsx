'use client'
import { useState } from 'react'
import { abletonTheme } from "@/themes";
import Link from "next/link";
import useSWR from 'swr'
import Image from "next/image";
import { SecondaryNavbar } from "./components/SecondaryNavbar";
import { Video } from './components/Video'
import { BoldText, NormalText } from './components/ParagraphStyles'

const fetcher = (url: string | URL, ...args: any[]) => fetch(url, ...args).then(res => res.json())

export default function ExampleAboutPage() {

  const { navbar: theme } = abletonTheme

  // const { data, error, isLoading } = useSWR('/api/video', fetcher)

  return (
    <section className="bg-white flex-col font-[futura] min-h-screen">
      <SecondaryNavbar />
      <div id="hero" className="flex justify-center align-middle">
        <div className='mt-1 w-[85vw] h-[90vh] mx-auto bg-cover bg-center bg-[url("/header.avif")] mb-16 lg:mb-28' />
        <h1 className="m-auto absolute text-[#fd5948] self-center font-[futura] font-medium text-[52px] md:text-[7vw]">Ableton</h1>
      </div>
      <div className='w-[85%] md:w-2/3 lg:w-[50vw] mx-auto font-[futura-bold] text-black'>
        <BoldText>We make <Link href='#'>Live</Link>, <Link href='#'>Push</Link>, <Link href='#'>Note</Link> and <Link href='#'>Link</Link> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</BoldText>
        <NormalText>
          Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
        </NormalText>
      </div>
      <div className="py-[8%] mt-16 lg:mt-24 relative flex-col w-screen h-[58.33333vw] ">
        <div className="absolute top-0 right-0 bg-[#fbffa7] w-[60.33333vw] h-[58.33333vw] mr-0 ml-auto " />
        <div className="flex top-0 left-0 absolute align-middle justify-evenly  w-screen h-[58.33333vw] z-10">
          <div className="bg-[url('/photo-1.jpg')] w-[40vw] h-[40vw] bg-no-repeat bg-contain self-center" />
          <div className="relative m-0 bg-[url('/photo-2.jpg')] w-[35vw] h-[35vw] bg-no-repeat bg-contain z-50 self-center justify-self-center bg-center" />
        </div>
      </div>
      <div className='w-[85%] md:w-2/3 lg:w-[50vw] mx-auto mt-16 lg:mt-24 mb-16 text-black'>
        <BoldText >Making music isn't easy. It takes time, effort, and learning. But when you're in the flow, it's incredibly rewarding.
        </BoldText>
        <NormalText>
          We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
        </NormalText>
      </div>
      <Video />
      <div className='w-[85%] md:w-2/3 lg:w-[50vw] mx-auto'>
        <BoldText>
          We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
        </BoldText>
        <NormalText>
          Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
        </NormalText>
      </div>
      <div className="py-[8%] mt-16 lg:mt-24 relative flex-col w-screen h-[75vw]">
        <div className="flex top-0 left-0 absolute mx-auto align-middle w-screen z-10 justify-around">
          <div className="absolute left-0 bg-[#b6ffc0] w-[58.33333vw] h-[75vw] mr-auto ml-0" />
          <div className='flex-col relative justify-evenly content-around h-[75vw]'>
            <div className="bg-[url('/photo-3.jpg')] w-[30vw] h-[30vw] bg-no-repeat bg-contain bg-center" />
            <div className="bg-[url('/photo-4.jpg')] w-[30vw] h-[30vw] bg-no-repeat bg-contain bg-center" />
          </div>
          <div className="relative bg-[url('/photo-5.jpg')] w-[35vw] h-[35vw] bg-no-repeat bg-contain z-50 bg-center self-center" />
        </div>
      </div>
      <div className='w-[85%] md:w-2/3 lg:w-[50vw] mx-auto mt-16 lg:mt-36'>
        <BoldText>
          We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
        </BoldText>
        <NormalText>
          Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We've learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don't always agree with each other, but opinion and debate are valued and openly encouraged.
        </NormalText>
      </div>
      <div className='bg-[url(/poster-meet-the-makers.avif)] mx-[8.33333vw] h-[44.99591836734694vw] bg-cover bg-center  mt-16 md:mt-36 bg-no-repeat' >
      </div>
      <div className='w-[85%] md:w-2/3 mx-auto mt-16 md:mt-36'>
        <BoldText>
          We're passionate about what we do, but we're equally passionate about improving who we are.
        </BoldText>
        <NormalText>
          We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
        </NormalText>
        <NormalText>
          Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
        </NormalText>
      </div>
      <div className='relative flex mt-16 md:mt-36 w-screen mx-0 min-h-[60vw] align-middle justify-center'>
        <div className='m-auto min-w-[60vw] min-h-[60vw] bg-[#d5b3ff]' />
        <div className='flex align-middle justify-start min-h-[60vw] w-screen absolute m-auto' >
          <div className='bg-contain bg-center bg-[url(/photo-6-a.jpg)] w-[35vw] bg-no-repeat h-[35vw] m-auto' />
          <div className='bg-contain bg-center bg-[url(/photo-7.jpg)] w-[45vw] bg-no-repeat h-[45vw] top-auto  ml-auto mr-0 my-auto' />
        </div>
      </div>
      <div className='w-[85%] md:w-2/3 lg:w-[50vw] mx-auto mt-16 md:mt-36'>
        <BoldText>
          We want our employees to love it here. Since we're looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
        </BoldText>
        <NormalText>
          If you're joining us in Berlin, we'll help with relocation and paperwork. We'll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it's not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
        </NormalText>
      </div>
      <div className='mx-[8.33333vw] flex-col flex sm:align-middle mt-16 lg:mt-36 lg:flex-row lg:justify-center' >
        <div className='w-full lg:w-[50vw] h-[50vw] bg-[url("/photo-8.jpg")] bg-cover bg-no-repeat bg-center' />
        <div className=' h-auto  bg-[#b1c5ff]  flex items-center justify-items-center lg:w-[50vw] '>
          <div className='w-full  mx-[8.33333%] my-auto  flex-col items-center justify-items-center justify-center'>
            <BoldText>
              We're really proud of the work we've done so far. But there's so much more to come. If you'd like to be a part of it, please join us.
            </BoldText>
            <BoldText>
              <Link href='#' className="after:[content:''] after:inline-block after:w-[0.3em] after:h-[0.3em] after:border-solid after:border-[#0000ff] after:border-t-[0.09em] after:border-r-[0.09em] after:ml-[0.1em] after:rotate-[50deg] after:skew-x-[10deg] after:-translate-y-[50%]" >See latest jobs
              </Link>
            </BoldText>
          </div>
        </div>
      </div>
    </section >
  )
}