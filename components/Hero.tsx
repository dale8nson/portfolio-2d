'use client'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useShader } from '@/hooks/useShader'
import { post } from '@/utils'
import { Lava } from './Lava'
import { Clouds } from './Clouds'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { CloudMaterial } from './CloudMaterial'
import { CloudText } from './CloudText'

extend({ PerspectiveCamera, TextGeometry, CloudMaterial })


export default function Hero() {

  const light = useRef<THREE.DirectionalLight | null>(null)
  const time = useRef<number>(0)

  const moveLight = (delta: number) => {
    console.log('delta: ', delta)
    if (!light.current) return
    time.current += delta
    light.current.translateX(Math.cos(time.current))
    requestAnimationFrame(moveLight)
  }

  // useEffect(() => {
  //   if(!light.current) return
  //   console.log('light: ', light)


  // }, [])

  // requestAnimationFrame((delta) => {
  //   console.log('delta:',  delta)
  //   moveLight(delta)
  // })

  return (
    <Canvas className='!h-[90vh] w-full rounded-md border-2 !my-2 border-white'>
      <PerspectiveCamera makeDefault args={[40, 16 / 10, 0.1, 100]} position={[0, 0, 0.66]} />
      <directionalLight ref={light} position={[-2, 0.5, 0]} intensity={80} />
      {/* <directionalLight ref={light} position={[0.1,0,0.1]} intensity={80} /> */}
      <hemisphereLight />
      <Clouds />
      <Lava />
      <CloudText position={[-0.55, 0.028, -0.1]} scale={[.0005, 0.0005, 0.0005]} size={100}>
        DALE
      </CloudText>
      <CloudText position={[-0.31, 0.026, 0]} scale={.0005} size={93}>
        TRISTAN
      </CloudText>
      <CloudText position={[-0.025, 0.024, 0.1]} scale={.0005} size={78}>
        HUTCHINSON
      </CloudText>
      <CloudText position={[-0.22, -0.018, 0.3]} scale={0.0005} size={55}>
        FRONTEND
      </CloudText>
      {/* <CloudText position={[-0.09, -0.018, 0.25]} scale={0.0005} size={50}>
        WEB
      </CloudText> */}
      <CloudText position={[0.0, -0.018, 0.28]} scale={0.0005} size={60}>
        DEVELOPER
      </CloudText>
    </Canvas>
  )
}