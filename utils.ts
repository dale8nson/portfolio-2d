import { Vector2, Vector3 } from 'three'
import { revalidateTag } from 'next/cache'

export const post: (url: string, body:object) => Promise<any> = async (url: string, body:object) => {

  

  const res = await fetch(url, {
    method:'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    next: { tags: [`${JSON.stringify(body)}`] },
    cache:'no-store'
  },
  
)

  const json = await res.json()

  return json
}

export const vec3 = ([x, y, z]: [x: number, y: number, z: number]) => {
  return new Vector3(x, y, z)
}

export const vec2 = ([x, y]: [x: number, y: number]) => {
  return new Vector2(x, y)
}