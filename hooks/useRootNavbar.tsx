'use client'
import { createContext, ReactNode, useContext } from 'react'

const Context = createContext<any>(null)

export const RootNavbarProvider = ({ children, domElement }: { children: ReactNode, domElement: HTMLElement }) => {
  return <Context.Provider value={domElement}>{children}</Context.Provider>
}

export const useRootNavbar = () => useContext(Context)