'use client'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { CloudMaterial } from './CloudMaterial';
import { motion } from 'framer-motion-3d'
import { MotionProps } from 'framer-motion';
import { Flex, Box } from '@react-three/flex'
import config from '../tailwind.config';


extend([TextGeometry, Flex])

export const CloudText = ({ children, position: positionProp = [0, 0, 0], scale: scaleProp = [1, 1, 1], size = 145, initial, animate, transition, ...props }: { children: string, position?: [x: number, y: number, z: number], scale?: number[], size?: number } & MotionProps) => {
  const { gl, size: canvasSz, camera, viewport } = useThree()

  const [font, setFont] = useState<any>()

  const time = useRef<number>(0)
  const ref = useRef<THREE.Mesh | null>(null)
  const transform = useRef<THREE.Matrix4>(new THREE.Matrix4())
  const initVP = useRef({ ...viewport })
  const initPos = useRef(positionProp)
  const initSz = useRef(canvasSz)

  const initScale = useRef<THREE.Vector3>(new THREE.Vector3().fromArray(scaleProp))
  const [scale, setScale] = useState<THREE.Vector3>(new THREE.Vector3().fromArray(scaleProp))
  const [position, setPosition] = useState<[x: number, y: number, z: number]>(positionProp)


  useEffect(() => {
    new FontLoader().load('/Noto_Sans_Black_Regular.json', font => {
      setFont(font)
    })
  }, [])

  useEffect(() => {

    console.log('viewport: ', viewport)
    // const w = viewport.getCurrentViewport().width
    // const h = viewport.getCurrentViewport().height
    const w = canvasSz.width
    const h = canvasSz.height

    console.log(`w: ${w}  h: ${h}`)

    const [x, y, z] = position

    console.log('w / initVP.current.width: ', w / initVP.current.width)
    console.log('h / initVP.current.height: ', h / initVP.current.height)

    const scaleX = w / initSz.current.width
    const scaleY = h / initSz.current.height

    const translateX = x - (scaleX * x)

    const posVec = new THREE.Vector3(...position)

    transform.current.set(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    )
    // ref.current?.applyMatrix4(transform.current)
    // setPosition(posVec.applyMatrix4(transform.current).toArray())
    // setScale(new THREE.Vector3(scaleX * initScale.current.x, scaleY * initScale.current.y, initScale.current.z))
    initSz.current = { ...canvasSz }
  

    //   ; (camera as THREE.PerspectiveCamera).aspect = w / h
    // camera.updateProjectionMatrix()

  }, [viewport])

  useFrame((_, delta) => {
    time.current += delta
    if (!ref.current) return
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
        <motion.mesh ref={(node: any) => ref.current = node} initial={initial} animate={animate} transition={transition} position={position} scale={scale}>
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