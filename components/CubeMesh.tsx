import { useState, useRef, useEffect} from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { post } from '@/utils'
import { useShader } from '@/hooks/useShader'

export const CubeMesh = () => {

  const { get } = useShader()

  const [vertexShader, setVertexShader] = useState<string | null>(null)
  const [fragmentShader, setFragmentShader] = useState<string | null>(null)

  const matRef = useRef<THREE.ShaderMaterial | null>(null)
  const meshRef = useRef<THREE.Mesh | null>(null)

  useEffect(() => {

    // if(!matRef.current) return

    // post('/api/shader', {name:'defaultVertexShader'}).then(shader => setVertexShader(shader))

    // post('/api/shader', {name:'fragment'}).then(shader => setFragmentShader(shader))

    (async () => {
      // const  mat = matRef.current as THREE.ShaderMaterial
      // console.log('mat === matRef.current: ', mat === matRef.current)
      // setVertexShader(await post(`/api/shader/?q=${crypto.randomUUID()}`, { name: 'defaultVertexShader' }).then(json => json.shader))
      // setFragmentShader(await post(`api/shader/?q=${crypto.randomUUID()}`, { name: 'frag' }).then(json => json.shader))
      setVertexShader(await get('defaultVertexShader').then(json => json.shader))
      setFragmentShader(await get('frag').then(json => json.shader))

    })()

  }, [])

  useFrame((_, delta) => {
    if(!meshRef.current) return
    meshRef.current.rotateX(delta)
    meshRef.current.rotateY(delta / 2)
    meshRef.current.rotateZ(delta / 4)
  })

  return (
    <>
    {fragmentShader && (
        <mesh position={[0, 0, 0]} ref={meshRef}>
        <boxGeometry args={[2.025, 1, 1, 1, 1, 1]} />
        <shaderMaterial ref={matRef} args={[{vertexShader: vertexShader as string, fragmentShader: fragmentShader}]} side={THREE.DoubleSide} />
      </mesh>
    )}
    </>
  )
}