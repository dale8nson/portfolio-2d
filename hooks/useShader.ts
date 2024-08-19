'use client'
import { post } from "@/utils"
import { flushSync } from "react-dom"

export const useShader = () => {
  const get = async (name: string) => {
      const json = await post('/api/shader', { name })
      return json
  }

  return { get }
}

export const dynamic = 'force-dynamic'