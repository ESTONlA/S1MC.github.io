import { useEffect, useState } from 'react'

type GitHubStats = {
  stars: number
  watchers: number
  forks: number
}

const GITHUB_API = 'https://api.github.com/repos/ESTONlA/ModcreatorSchedule1'

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function fetchStats() {
      try {
        const response = await fetch(GITHUB_API)
        if (!response.ok) {
          throw new Error(`GitHub stats request failed: ${response.statusText}`)
        }
        const payload = await response.json()
        if (!isMounted) {
          return
        }
        setStats({
          stars: payload.stargazers_count ?? 0,
          watchers: payload.subscribers_count ?? 0,
          forks: payload.forks_count ?? 0,
        })
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Failed to load GitHub stats'))
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchStats()

    return () => {
      isMounted = false
    }
  }, [])

  return { stats, error, loading }
}
