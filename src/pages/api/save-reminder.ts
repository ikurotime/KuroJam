import redis from '@/redis'
import type { APIRoute } from 'astro'

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const email = data.get('email')
  if (!email) {
    return new Response(
      JSON.stringify({
        message: 'Faltan campos requeridos'
      }),
      { status: 400 }
    )
  }
  // avoid duplicates
  const emails = await redis.sMembers('emails')
  if (emails.includes(email.toString())) {
    return new Response(
      JSON.stringify({
        message: 'Ya estás suscrito'
      }),
      { status: 400 }
    )
  }
  redis.sAdd('emails', email)
  return new Response(
    JSON.stringify({
      message: '¡Éxito!'
    }),
    { status: 200 }
  )
}
