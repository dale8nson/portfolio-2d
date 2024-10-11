'use client'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { Text3D } from '@react-three/drei';
import { CloudMaterial } from './CloudMaterial';
import { motion } from 'framer-motion-3d'
import { MotionProps } from 'framer-motion';
import { Flex, Box } from '@react-three/flex'
import config from '../tailwind.config';


extend(Text3D)

export const CloudText = ({ children, position: positionProp = [0, 0, 0], scale: scaleProp = [1, 1, 1], size = 145, initial, animate, transition, ...props }: { children: string, position?: [x: number, y: number, z: number], scale?: [x: number, y: number, z: number], size?: number } & MotionProps) => {
  

  const [font, setFont] = useState<any>()


  useEffect(() => {
    new FontLoader().load('/Noto_Sans_Black_Regular.json', font => {
      setFont(font)
    })
  }, [])

  

  return (
    <>
      {font && (
        <motion.mesh initial={initial} animate={animate} transition={transition} position={positionProp} scale={scaleProp}>
          {/*@ts-ignore */}
          <textGeometry args={[children, { font, depth: .2, curveSegments: 12, bevelSegments: 16, size: size, bevelEnabled: false, bevelThickness: .002 }]} />
          {/* <meshBasicMaterial color={[0,0,1.0]} />
          <meshBasicMaterial color={[0,0,1.0]} /> */}

          <CloudMaterial invert />
          <CloudMaterial />
        </motion.mesh>
      )}
    </>
  )
}