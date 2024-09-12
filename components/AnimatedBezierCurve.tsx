import { useEffect } from 'react'
import * as THREE from 'three'
import { vec2 } from "@/utils"
import { MotionProps, useMotionValue, animate } from "framer-motion"
import { motion } from 'framer-motion-3d'
import { ReactNode, useCallback } from "react"

export const AnimatedBezierCurve = ({position, scale, length, width, motionProps, children, ...props}: {position: [x: number, y: number, z: number], scale:[x: number, y: number, z: number], length: number, width: number, motionProps: MotionProps, children: ReactNode}) => {
  const arr: JSX.Element[] = []
  const [x, y, z] = position
  const [sx, sy, sz] = scale
  const step = 0.035
  const delay = 0.01
  const mvx = useMotionValue(x)
  const mvy = useMotionValue(y)
  const mvz = useMotionValue(z)
  const mWidth = useMotionValue(width)
  const mx = mvx.get()
  const my = mvy.get()
  const mz = mvz.get()
  const curve = new THREE.CubicBezierCurve(
    vec2([x, y]),
    vec2([x + (length / 3) * sx, y + (mWidth.get() / 2) * sy]),
    vec2([x + (length - length / 3) * sx, y - (mWidth.get() / 2) * sy]),
    vec2([x + length * sx, y])
  )

  const s = new THREE.Shape()
  s.autoClose = false
  s.setFromPoints(curve.getPoints(100))
  console.log('s.autoClose: ', s.autoClose)

  useEffect(() => {
    animate(mWidth, 0,{duration: 2, delay:1.7})
  }, [])

  return (
    <motion.mesh {...{position:[x, y, z], scale, ...motionProps}} >
      <shapeGeometry args={[s]} />
      {children}
    </motion.mesh>
  )
  
}