import * as THREE from 'three'
import { useFrame, useThree } from "@react-three/fiber"
import { transform } from "framer-motion"
import { useEffect, useRef } from "react"
import { CloudText } from "./CloudText"

export const HeroText = () => {
  
  const { gl, size: canvasSz, camera, viewport } = useThree()

  // const initScale = useRef<THREE.Vector3>(new THREE.Vector3().fromArray(scaleProp))
  // const [scale, setScale] = useState<THREE.Vector3>(new THREE.Vector3().fromArray(scaleProp))
  // const [position, setPosition] = useState<[x: number, y: number, z: number]>(positionProp)

  const ref = useRef<THREE.Mesh | null>(null)
  const time = useRef<number>(0)
  const transform = useRef<THREE.Matrix4>(new THREE.Matrix4())
  const initVP = useRef({ ...viewport })
  // const initPos = useRef(positionProp)
  const initSz = useRef({width: 1472, height:980})

  useEffect(() => {

    console.log('viewport: ', viewport)
    // const w = viewport.getCurrentViewport().width
    // const h = viewport.getCurrentViewport().height
    const w = canvasSz.width
    const h = canvasSz.height

    console.log(`w: ${w}  h: ${h}`)

    // const [x, y, z] = position

    console.log('w / initVP.current.width: ', w / initVP.current.width)
    console.log('h / initVP.current.height: ', h / initVP.current.height)

    const scaleX = w / initSz.current.width
    const scaleY = h / initSz.current.height

    // const translateX = x - (scaleX * x)

    // const posVec = new THREE.Vector3(...position)

    transform.current.set(
      scaleX, 0, 0, 0,
      0, scaleX, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    )
    ref.current?.applyMatrix4(transform.current)
    // setPosition(posVec.applyMatrix4(transform.current).toArray())
    // setScale(new THREE.Vector3(scaleX * initScale.current.x, scaleY * initScale.current.y, initScale.current.z))
    initSz.current = { ...canvasSz }
  

    //   ; (camera as THREE.PerspectiveCamera).aspect = w / h
    // camera.updateProjectionMatrix()

  }, [canvasSz])

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
    <group ref={ref} position={[0,0,0]} scale={[1,1,1]} >
      <CloudText position={[-0.38, 0.0, 0.0]} scale={[.055, .055, .055]} size={1} initial={{ x: 0.9 }
      } animate={{ x: [0.8, -0.38] }} transition={{ duration: 0.5, delay: 1, ease: 'easeIn' }}>
        DALE
      </CloudText >
      {/* <CloudText position={[-0.31, 0.026, 0]} scale={.0005} size={93}>
    TRISTAN
  </CloudText> */}
      <CloudText position={[-0.005, 0.0, 0]} scale={[.0545, .055, .055]} size={1} initial={{ x: -1.2 }} animate={{ x: [-1.2, -0.15] }} transition={{ duration: 0.5, delay: 1, ease: ['easeIn'] }}>
        HUTCHINSON
      </CloudText >
      {/* <AnimatedBezierCurve position={[-0.28, 0, 0]} scale={[0.125, 0.125, 0.1]} length={40} width={20} motionProps={{initial:{y:2}, animate:{y: 0}, transition:{duration: 2, delay:1.7}}} bevelEnabled={false}> */}
      {/* <CloudMaterial /> */}
      {/* <CloudMaterial invert /> */}
      {/* </AnimatedBezierCurve> */}
      {/* <CloudText position={[-0.375, 0.0, 0.0]} scale={[.054125, .054125, .054125]} size={1} >
    ____________________
  </CloudText> */}
      <CloudText position={[-0.38, -0.065, 0.0]} scale={[0.048, 0.047, 0.047]} size={1}
        initial={{ x: 1.2 }} animate={{ x: [-2, -0.38] }} transition={{ duration: 0.5, delay: 2 }}
      >
        SOFTWARE
      </CloudText>
      <CloudText position={[-0.005, -0.065, 0.0]} scale={[0.048, 0.047, 0.05]} size={1}
        initial={{ x: 1.2 }} animate={{ x: [2, -0.005] }} transition={{ duration: 0.5, delay: 2.25 }}
      >
        DEVELOPER
      </CloudText>
    </group>

  )
}