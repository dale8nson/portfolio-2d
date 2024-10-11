
import { ReactNode } from 'react';

export const BoldText = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <p className={`[&_a]:text-[#0000ff] w-[95%] text-[1.25rem] lg:text-[1.875rem] leading-[1.6] font-[futura] font-medium mb-4 md:mb-8 text-black ${className}`} >{children}</p>
  )
}

export const NormalText = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <p className={`font-[futura] md:text-[1.25rem] text-black mb-2 md:mb-6 ${className}`}>{children}</p>
  )
}
