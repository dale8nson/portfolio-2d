'use client'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useShader } from '@/hooks/useShader'
import { post } from '@/utils'
import { CubeMesh } from './CubeMesh'


extend([PerspectiveCamera])

export default function Hero() {

  return (
    <Canvas className='!h-[90vh] w-full rounded-md border-2 !my-2 border-white'>
      <PerspectiveCamera makeDefault args={[75, 16 / 9, 0.1, 1000]} position={[0, 0, 0.6]} />
      <CubeMesh />
    </Canvas>
  )
}