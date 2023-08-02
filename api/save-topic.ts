
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from 'redis'

export default async function (request: VercelRequest, response: VercelResponse) {
  response.setHeader('Content-Type', 'application/json')
  const {topic} = await JSON.parse(request.body)
  if (!topic) {
    response.status(400).send(
      JSON.stringify({
        message: 'Faltan campos requeridos'
      })
    )
  }
  const redis = createClient({ url: process.env.VITE_REDIS_URL })
  await redis.connect()
  redis.sAdd('topics', topic)
  response.status(200).send(
    JSON.stringify({
      message: '¡Éxito!'
    })

  )
}
