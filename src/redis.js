import { createClient } from 'redis'

const redis = createClient({ url: import.meta.env.VITE_REDIS_URL })
redis.on('error', (err) => console.log('Redis Client Error', err))
await redis.connect()
export default redis
