import {
  cacheMiddleware,
  loggerMiddleware,
  urlMiddleware,
} from "react-relay-network-modern"

const isClient = typeof window !== "undefined"

export const middleware: Array<any> = [
  urlMiddleware({
    url: process.env.METAPHYSICS_ENDPOINT!,
  }),
  isClient && loggerMiddleware(),
  cacheMiddleware({
    size: 100,
    ttl: 60 * 1000,
  }),
]
