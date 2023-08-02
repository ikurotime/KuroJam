
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from 'redis';


export default async function (request: VercelRequest, response: VercelResponse) {
  response.setHeader('Content-Type', 'application/json')
  const {email} = await JSON.parse(request.body)
  if (!email) {
    response.status(401).send(
      JSON.stringify({
        message: 'Faltan campos requeridos'
      })
    ) 
  }
  const redis = createClient({ url: process.env.VITE_REDIS_URL })
  await redis.connect()

  redis.on('error', (err) => console.log('Redis Client Error', err))
  const emails = await redis.sMembers('emails')
  if (emails.includes(email)) {
    response.status(400).send(
      JSON.stringify({
        message: 'Ya estás suscrito'
      })
    )
  }else{
    await redis.sAdd('emails', email)
    response.status(200).send(
    JSON.stringify({
      message: '¡Éxito!'
    })
  )
  }
  
  
}
