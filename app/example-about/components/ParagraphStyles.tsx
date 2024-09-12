
import { ReactNode } from 'react';

export const BoldText = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <h1 className={`[&_a]:text-[#0000ff] w-[95%] [&_a]:font-[futura-bold] text-[1.1rem] md:text-[1.65rem] leading-[1.6] font-[futura-bold] mb-4 md:mb-8 text-black ${className}`} >{children}</h1>
  )
}

export const NormalText = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <p className={`font-[futura] md:text-[0.8rem] lg:text-[18.5px] text-black mb-2 md:mb-6 ${className}`}>{children}</p>
  )
}
