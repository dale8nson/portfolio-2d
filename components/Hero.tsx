'use client'
import { useState, useEffect, useRef, useMemo, useCallback, createElement } from 'react'
import * as THREE from 'three'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useShader } from '@/hooks/useShader'
import { post, vec2 } from '@/utils'
import { Lava } from './Lava'
import { Clouds } from './Clouds'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { CloudMaterial } from './CloudMaterial'
import { CloudText } from './CloudText'
import { AnimatedBezierCurve } from './AnimatedBezierCurve'
import { MotionProps, useMotionValue } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { jsx } from 'react/jsx-runtime'
import { HeroText } from './HeroText'

extend({ PerspectiveCamera, TextGeometry, CloudMaterial })


export default function Hero() {

  const light = useRef<THREE.DirectionalLight | null>(null)
  const time = useRef<number>(0)
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const cam = useRef<THREE.PerspectiveCamera | null>(null)

  const moveLight = (delta: number) => {
    console.log('delta: ', delta)
    if (!light.current) return
    time.current += delta
    light.current.translateX(Math.cos(time.current))
    requestAnimationFrame(moveLight)
  }

  

  useEffect(() => {
    if(!cam.current || !canvas.current) return
    const canv = canvas.current as HTMLCanvasElement
    const camera = cam.current as THREE.PerspectiveCamera
    camera.aspect = canv.clientWidth / canv.clientHeight
  }, [])



  // requestAnimationFrame((delta) => {
  //   console.log('delta:',  delta)
  //   moveLight(delta)
  // })

  return (
    <Canvas ref={canvas} className='!h-[90vh] !flex w-full rounded-md border-2 !my-2 border-white'>
      <PerspectiveCamera ref={cam} makeDefault args={[40, 16 / 10, 0.1, 100]} position={[0, 0, 0.66]} />
      <directionalLight ref={light} position={[-2, 0.5, 0]} intensity={80} />
      {/* <directionalLight ref={light} position={[0.1,0,0.1]} intensity={80} /> */}
      <hemisphereLight />
      <Clouds />
      {/* <Lava /> */}
      <HeroText />
    </Canvas>
  )
}