"use client"
import { useEffect, useState, useRef, useMemo } from 'react'
import { Vector2 as vec2, Matrix4 as mat4, Vector3 as vec3 } from 'three'
import { useTexture } from "@react-three/drei"
import { DRAW_MODES, Texture, Assets, BlurFilter, DisplacementFilter, Sprite } from 'pixi.js'
import * as PIXI from 'pixi.js'
import { Stage, SimpleMesh, useTick, withFilters, Container } from '@pixi/react'
import { create2DMeshData } from '@/utils'
import { AdjustmentFilter } from '@pixi/filter-adjustment'

const w = 288
const h = 384



export const Portrait3D = () => {

  const Filters = withFilters(Container, {
    blur: BlurFilter,
    displacement: DisplacementFilter,
    adjust: AdjustmentFilter,
  });

  const [tex, setTex] = useState()
  const [blur, setBlur] = useState<number>()
  const [vertices, setVertices] = useState<Float32Array>()
  const [uvs, setUvs] = useState<Float32Array>()
  const [indices, setIndices] = useState<Uint16Array>()

  const disTex = Texture.from("/displacement_map_repeat.jpg")

  const displacementSprite = new Sprite(disTex)
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

  const ref = useRef(null)

  const [mVertices, mUvs, mIndices] = useMemo(() => create2DMeshData(w, h, 10, 10), [])

  useEffect(() => {

    (async () => {
      setTex(await Assets.load('/profile-picture Background Removed.png'))
    })()

    setVertices(mVertices as Float32Array)
    setUvs(mUvs as Float32Array)
    setIndices(mIndices as Uint16Array)
  
    if(!ref.current) return


  }, [])

  let time = 0

  useTick(delta => {
    if(!vertices) return
    // for(let index = 0; index < vertices.length ; index += 2) {
    //   // vertices[index] += Math.cos(time / 60 + index) * 0.0625
    //   vertices[index] -= Math.cos(time / 10 + index) * 0.25
    //   vertices[index + 1] -= Math.sin(time / 10 + index) * 0.25
    // }
    // setBlur(Math.tan(time / 5) * 5)
    displacementSprite.x++
    
    time += delta
  })

  return (
    <>
    <Filters blur={{ blur: 0 }} 
    displacement={{
      map:disTex,
      construct:[displacementSprite, 20], 
      // padding:10
      }} 
      adjust={{ gamma: 1, brightness: 1 }}>
       <SimpleMesh
        ref={ref}
        image={'/profile-picture Background Removed.png'}
        uvs={uvs}
        vertices={vertices}
        indices={indices}
        drawMode={DRAW_MODES.TRIANGLES}
      />
      </Filters>
    </>
  )
}