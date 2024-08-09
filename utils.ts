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