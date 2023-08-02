import redis from '@/redis'
import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const topic = data.get('topic')
  if (!topic) {
    return new Response(
      JSON.stringify({
        message: 'Faltan campos requeridos'
      }),
      { status: 400 }
    )
  }
  
  redis.sAdd('topics', topic)
  return new Response(
    JSON.stringify({
      message: '¡Éxito!'
    }),
    { status: 200 }
  )
}
