import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Footer } from "flowbite-react";


gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const About = () => {

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel")
    const horizontalScrollAnim = gsap.to(sections, {
      x: "+=-100vw",
      ease: "none"
    })
    ScrollTrigger.create({
      animation: horizontalScrollAnim,
      trigger: ".panel",
      start: "center center",
      end: "+=200%",
      scrub: 0.2,
      pin: "#about",
      snap: {
        snapTo: 1 / sections.length,
        duration: 0.25
      }
    })
    const fadeUpAnim = gsap.from(".fade-up", {
      opacity: 0,
      y: "100%",
      ease: "none"
    })
    ScrollTrigger.create({
      animation: fadeUpAnim,
      trigger: ".fade-up",
      toggleActions: "restart reverse restart reverse",
      start: "-100% 70%",
      end: "+=200",
      scrub: true,
    })

    const fadeDownAnim = gsap.from(".fade-down", {
      opacity: 0,
      y: "-100%",
      duration: .25,
      ease: "none",
    })

    ScrollTrigger.create({
      animation: fadeDownAnim,
      trigger: ".fade-down",
      toggleActions: "restart reverse restart reverse",
      start: "bottom 70%",
      end: "+=200",
      scrub: true,
    })

    const textAnim = gsap.to('#about-heading', {
      text: 'ABOUT'
    })

    ScrollTrigger.create({
      animation: textAnim,
      trigger: "#about-heading",
      start: "top 90%",
      end: "+=100",
      toggleActions: "restart reverse restart reverse",
      scrub: true
    })

    const techAnim = gsap.to('#tech-heading', {
      text: 'TECHNOLOGIES I USE',
    })

    ScrollTrigger.create({
      animation: techAnim,
      containerAnimation: horizontalScrollAnim,
      trigger: "#tech-heading",
      start: "left 50%",
      end: "+=300",
      toggleActions: "restart reverse restart reverse",
      scrub: true
    })
  })
  return (
    <section id="about" className="flex items-center justify-start w-[200%] h-screen flex-nowrap">
      <div className="panel w-screen h-screen flex flex-row align-middle items-center px-4 py-16 mx-auto mt-7 md:px-24 lg:px-8 lg:py-20 text-[#ee0000] font-[futura]">
        <div className="w-screen justify-evenly grid gap-10 lg:grid-cols-2 mx-0 overflow-y-hidden">
          <div className="fade-up flex-col lg:pr-10 opacity-100 h-full w-full">
            <div className="flex justify-center">
              <h2 id="about-heading" className="mb-4 font-[futura-bold] text-6xl font-extrabold leading-none">
                &nbsp;ツイテ&nbsp;
              </h2>
            </div>
            <p id="para" className="mb-6 text-2xl w-full">
              I'm a software developer with proficiency in a range of languages and both frontend and backend technologies. I am passionate about crafting functional software solutions and user experiences to meet client needs. I am skilled in problem-solving, communication, and love learning new technologies. I was a recent participant in the Victorian Government Digital Jobs Program, specialising in web development.
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-4">
              <BsGithub />
              <BsLinkedin />
            </div>
          </div>
          <div>
            <img
              className="fade-down object-contain w-full h-[80vh] rounded shadow-lg sm:h-96"
              src="/profile-picture Background Removed.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="panel w-[110vw] mx-0 text-[#ee0000]">
        <div className="w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="min-w-screen">
            <h2 id="tech-heading" className="text-3xl font-bold font-[futura-bold] sm:text-4xl">ツカッテイルテクノロジー</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold">FRONTEND</h2>
              <div className="w-auto mt-2 flex justify-evenly items-start">
                <div className="flex flex-col">
                  <div className="mt-2 text-white font-[optimistic]">
                    <div className="flex flex-row align-middle items-center">
                      <div className="m-0 self-justify-start">
                        <svg color="#58c4dc" width="30%" height="30%" viewBox="-10.5 -9.45 21 18.9" fill="#58c4dc" xmlns="http://www.w3.org/2000/svg" className="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out m-0 p-0">
                          <circle cx="0" cy="0" r="2" fill="currentColor" />
                          <g stroke="currentColor" strokeWidth="1" fill="none">
                            <ellipse rx="10" ry="4.5" />
                            <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                            <ellipse rx="10" ry="4.5" transform="rotate(120)" />
                          </g>
                        </svg>
                      </div>
                      <div className="mx-4 justify-self-start align-baseline">
                        <h3 className="text-2xl">React</h3></div>
                    </div>
                  </div>
                  <div className="justify-self-start my-2">
                    <svg fill="#ffffff" className="h-[1.4vw] mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 79"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"></path><path clipRule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fillRule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"></path></svg>
                  </div>
                  <div className="">
                    <svg viewBox="0 0 248 31" color="#ffffff" className="mt-10 text-white w-auto h-5"><path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex text-white align-middle my-10">
                    <div className="mr-6" >
                      <svg viewBox="0 0 64 64" width="36" height="36" strokeWidth="2" stroke="#ffffff">
                        <path d="M0,0 L64,17.148748315591853 L17.148748315591853, 64 L0,0" />
                        {/* 16.564418886561327 */}
                        <path d="M15.999999999999998, 4.287187078897962 L4.287187078897962, 15.999999999999998" />
                        <path d="M 31.999999999999996, 8.574374157795924 L8.574374157795924, 31.999999999999996" />
                        <path d="M48, 12.861561236693888 L12.861561236693888, 48" />
                        <path d="M4.287187078897962, 15.999999999999998 L52.287187078897965 ,28.861561236693888 " />
                        <path d="M8.574374157795924, 31.999999999999996 L40.57437415779593 ,40.57437415779592" />
                        <path d="M12.861561236693888, 48 L28.861561236693895 ,52.28718707889796 " />
                        <path d="M15.999999999999998, 4.287187078897962 L28.861561236693895 ,52.28718707889796 " />
                        <path d="M31.999999999999996, 8.574374157795924 L40.57437415779593,40.57437415779592" />
                        <path d="M31.999999999999996, 8.574374157795924 L40.57437415779593,40.57437415779592" />
                        <path d="M48, 12.861561236693888 L52.287187078897965 ,28.861561236693888" />
                      </svg>
                    </div>
                    <div className="text-[#049ef4] text-2xl font-[roboto]">
                      <h3>three.js</h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <div className="flex align-middle items-center mt-0">
                    <div className="m-0 h-[3.8vw]">
                      <svg stroke="#ffffff" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 120" width="70" height="60"><path d="M 44.65 33.992 L 95.35 33.992 L 95.35 59.341 L 70 59.341 Z M 44.65 59.341 L 70 59.341 L 95.35 84.691 L 44.65 84.691 Z M 44.65 84.691 L 70 84.691 L 70 110.041 Z" fill="rgb(255, 255, 255)"></path></svg></div>
                    <div className="">
                      <h3 className="font-[gt-walsheim] text-white text-2xl">Framer <span className="text-[#e630bf]">Motion</span></h3>
                    </div>
                  </div>
                  <div className="flex align-middle justify-start justify items-start align-items-center ml-6 mt-4">
                    <svg viewBox="0 0 128 32" height="50%" width="50%" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px)" }}>
                      <path fill="#FFFCE1" d="M23.81 14.012v.013l-1.075 4.666c-.058.264-.322.457-.626.457H20.81a.218.218 0 0 0-.208.156c-1.198 4.064-2.82 6.857-4.962 8.534-1.822 1.428-4.068 2.094-7.069 2.094-2.696 0-4.514-.867-6.056-2.579-2.038-2.262-2.88-5.966-2.37-10.428C1.065 8.548 5.41.095 13.776.095c2.545-.022 4.543.763 5.933 2.33 1.47 1.658 2.216 4.154 2.22 7.422a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.26-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.958-1.027 2.47-1.55 5.153-1.447 7.825.049 1.244.249 2.993 1.43 3.718 1.047.642 2.541.216 3.446-.495.904-.712 1.632-1.943 1.938-3.066.043-.156.046-.277.005-.331-.043-.056-.162-.069-.253-.069h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.239.27-.42.537-.452v-.012h10.33c.024 0 .049 0 .072.005.268.035.457.284.452.556h.002Z" style={{ opacity: 1 }}></path>
                      <path fill="#FFFCE1" d="M41.595 8.65a.548.548 0 0 1-.548.53h-5.646c-.37 0-.679-.3-.679-.665 0-1.647-.57-2.449-1.736-2.449s-1.918.716-1.94 1.967c-.025 1.395.764 2.663 3.01 4.841 2.957 2.774 4.142 5.231 4.085 8.479C38.048 26.605 34.477 30 29.043 30c-2.775 0-4.895-.742-6.305-2.206-1.431-1.487-2.087-3.669-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.208.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.762 1.735-2.09.02-1.148-.343-2.154-2.321-4.189-2.555-2.496-4.846-5.075-4.775-9.13.042-2.352.976-4.503 2.631-6.057C28.295.868 30.688 0 33.466 0c2.783.02 4.892.814 6.269 2.36 1.304 1.465 1.931 3.581 1.862 6.29h-.002Z" style={{ opacity: 1 }}></path>
                      <path fill="#FFFCE1" d="m59.095 29.012.037-27.933a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.253-.507.42L36.706 28.841v.005l-.005.007c-.14.343.126.71.497.71h6.108c.33 0 .549-.1.656-.308l1.213-2.915c.149-.389.177-.425.601-.425h5.836c.406 0 .414.008.408.405l-.131 2.71a.525.525 0 0 0 .528.533h6.171a.523.523 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326a1.67 1.67 0 0 1-.138-.005.147.147 0 0 1-.13-.184c.012-.04.029-.095.054-.162l4.376-10.828a2.99 2.99 0 0 1 .136-.313c.071-.146.157-.156.184-.048.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.04h-.008l.003-.002Z"></path>
                      <path fill="#FFFCE1" d="M71.543.546h-4.639c-.245 0-.52.13-.584.422l-6.456 28.03a.423.423 0 0 0 .088.363.573.573 0 0 0 .437.202h5.798c.312 0 .525-.153.583-.418l.704-3.177c.05-.248-.036-.44-.258-.556a52.313 52.313 0 0 1-.312-.162l-1.005-.523-1-.522-.387-.201a.186.186 0 0 1-.103-.17.199.199 0 0 1 .2-.194l3.177.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.108-6.12-3.308-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.279 0-.328-.03-.336-.04-.005-.007 1.832-8.073 1.833-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.189.189 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.238-.061 3.491-1.721 7.09-4.766 7.213Z" style={{ opacity: 1 }} />
                    </svg>
                  </div>
                  <div className=" flex align-middle ml-6 mt-7 h-[4vw]">
                    <svg width="106" height="28" fill="#663399" viewBox="0 0 106 28">
                      <g>
                      <path d="M14,0C6.3,0,0,6.3,0,14s6.3,14,14,14s14-6.3,14-14S21.7,0,14,0z M6.2,21.8c-2.1-2.1-3.2-4.9-3.2-7.6L13.9,25 C11.1,24.9,8.3,23.9,6.2,21.8z M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5l-1.5,1.3C19.7,6.5,17,5,14,5 c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z" />
                      </g>
                    <g fill="#fff">
                      <path d="M62.9,12h2.8v10h-2.8v-1.3c-1,1.5-2.3,1.6-3.1,1.6c-3.1,0-5.1-2.4-5.1-5.3c0-3,2-5.3,4.9-5.3c0.8,0,2.3,0.1,3.2,1.6V12z M57.7,17c0,1.6,1.1,2.8,2.8,2.8c1.6,0,2.8-1.2,2.8-2.8c0-1.6-1.1-2.8-2.8-2.8C58.9,14.2,57.7,15.4,57.7,17z" />
                    <path d="M71.2,14.4V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4H71.2z" />
                    <path d="M79.7,14.4c-0.7-0.6-1.3-0.7-1.6-0.7c-0.7,0-1.1,0.3-1.1,0.8c0,0.3,0.1,0.6,0.9,0.9l0.7,0.2c0.8,0.3,2,0.6,2.5,1.4 c0.3,0.4,0.5,1,0.5,1.7c0,0.9-0.3,1.8-1.1,2.5c-0.8,0.7-1.8,1.1-3,1.1c-2.1,0-3.2-1-3.9-1.7l1.5-1.7c0.6,0.6,1.4,1.2,2.2,1.2 c0.8,0,1.4-0.4,1.4-1.1c0-0.6-0.5-0.9-0.9-1l-0.6-0.2c-0.7-0.3-1.5-0.6-2.1-1.2c-0.5-0.5-0.8-1.1-0.8-1.9c0-1,0.5-1.8,1-2.3 c0.8-0.6,1.8-0.7,2.6-0.7c0.7,0,1.9,0.1,3.2,1.1L79.7,14.4z" />
                    <path d="M85.8,13.3c1-1.4,2.4-1.6,3.2-1.6c2.9,0,4.9,2.3,4.9,5.3c0,3-2,5.3-5,5.3c-0.6,0-2.1-0.1-3.2-1.6V22H83V5.2h2.8V13.3z M85.5,17c0,1.6,1.1,2.8,2.8,2.8c1.6,0,2.8-1.2,2.8-2.8c0-1.6-1.1-2.8-2.8-2.8C86.6,14.2,85.5,15.4,85.5,17z" />
                    <path d="M98.5,20.5L93.7,12H97l3.1,5.7l2.8-5.7h3.2l-8,15.3h-3.2L98.5,20.5z" />
                    <path d="M54,13.7h-2.8c0,0-4.2,0-4.2,0v2.8h3.7c-0.6,1.9-2,3.2-4.6,3.2c-2.9,0-5-2.4-5-5.3S43.1,9,46,9c1.6,0,3.2,0.8,4.2,2.1 l2.3-1.5C51,7.5,48.6,6.3,46,6.3c-4.4,0-8,3.6-8,8.1s3.4,8.1,8,8.1s8-3.6,8-8.1C54.1,14.1,54,13.9,54,13.7z" />
                    </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start mt-10 gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-bold">BACKEND</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                  possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-bold">LANGUAGES</h2>
                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
                  possimus quisquam reiciendis tempora animi! Quaerat, saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};