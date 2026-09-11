type RateLimitEntry = {
  count: number
  resetAt: number
}

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 10
const MAX_BUCKETS = 1000

const buckets = new Map<string, RateLimitEntry>()

const pruneExpired = (now: number) => {
  if (buckets.size <= MAX_BUCKETS) {
    return
  }

  for (const [key, entry] of buckets) {
    if (entry.resetAt <= now) {
      buckets.delete(key)
    }
  }
}

export const isRateLimited = (key: string): boolean => {
  const now = Date.now()
  pruneExpired(now)

  const entry = buckets.get(key)

  if (!entry || entry.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  entry.count += 1
  return entry.count > MAX_REQUESTS
}
