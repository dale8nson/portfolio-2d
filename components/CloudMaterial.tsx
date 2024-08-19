'use client'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { useShader } from '@/hooks/useShader'
import { useFrame } from '@react-three/fiber'

export const CloudMaterial = ({ invert, intensity = 1.0, ...props }: { invert?: boolean, intensity?: number }) => {

  const { get } = useShader()

  const matRef = useRef(null)
  const [vertexShader, setVertexShader] = useState('')
  const [fragmentShader, setFragmentShader] = useState('')
  const [time, setTime] = useState(0)

  useEffect(() => {
    (async () => {
      setVertexShader(await get('cloudTextVert').then(json => json.shader))
      setFragmentShader(await get('cloudTextFrag').then(json => json.shader))
    })()
  }, [])

  useFrame((_, delta) => {
    if (!matRef.current) return
    const material = matRef.current as THREE.ShaderMaterial
    setTime(time + delta)
    // material.uniforms.intensity.value += Math.cos(material.uniforms.time.value)
    material.needsUpdate = true
  })

  return (
    <>
      {fragmentShader && <shaderMaterial ref={matRef} args={[{
        vertexShader: vertexShader as string, fragmentShader: fragmentShader, side: THREE.DoubleSide, uniforms: { time: { value: time }, invert: { value: invert }, intensity: { value: intensity }}
        // , delta: { value: 0},
      }]}
      // wireframe
      {...props}
      transparent
      />}
    </>
  )
}