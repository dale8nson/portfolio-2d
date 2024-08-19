'use client'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { extend, useFrame } from '@react-three/fiber';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { CloudMaterial } from './CloudMaterial';
import { motion } from 'framer-motion-3d'
import { MotionProps } from 'framer-motion';

declare interface textGeometry {
  args: any[]
}

extend([TextGeometry])

export const CloudText = ({children, position=[0,0,0], scale=[1,1,1], size=145, initial, animate, ...props}:{children: string, position?: number[], scale?: number[] | number, size?: number} & MotionProps) => {

  const [font, setFont] = useState<any>()

  const time = useRef<number>(0)
  const ref = useRef<THREE.Mesh | null>(null)
  const transform = useRef<THREE.Matrix4>(new THREE.Matrix4)

  useEffect(() => {
    new FontLoader().load('/Noto_Sans_Black_Regular.json', font => {
      setFont(font)
    })
  }, [])

  useFrame((_, delta) => {
    time.current += delta
    if(!ref.current) return
    transform.current.set(
      1, 0, 0, 0,
      0, 1, 0, Math.sin(time.current) * 0.0001953125,
      0, 0, 1, 0,
      0, 0, 0, 1
    )
    ref.current.applyMatrix4(transform.current)

  })


  return (
    <>
    {font && (
        <motion.mesh ref={ref} intial={initial} animate={animate} position={new THREE.Vector3(...position)} scale={typeof scale === typeof Array<number> ? new THREE.Vector3(scale[0], scale[1], scale[2] ) : scale}>
          <textGeometry args={[children, {font, depth:.2, curveSegments:12, bevelSegments: 16, size: size, bevelEnabled: false, bevelThickness: .002}] }  />
          {/* <meshBasicMaterial color={[0,0,1.0]} /> */}
          <CloudMaterial invert />
          <CloudMaterial  />
        </motion.mesh>
      )}
    </>
  )
}