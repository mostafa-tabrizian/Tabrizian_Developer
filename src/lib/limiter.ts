import { RateLimiter } from 'limiter'

const limiter = new RateLimiter({
   tokensPerInterval: 20,
   interval: 'min',
   fireImmediately: true,
})

export default limiter
