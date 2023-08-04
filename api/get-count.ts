import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from 'redis'

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  response.setHeader('Content-Type', 'application/json')
  const redis = createClient({ url: process.env.VITE_REDIS_URL })
  await redis.connect()
  //get the count of all the keys of the 'emails' set
  const count = await redis.sCard('emails')
  response.status(200).send(
    JSON.stringify({
      message: count
    })
  )
}
