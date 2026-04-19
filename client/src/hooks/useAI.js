import { useState } from 'react'

const API = import.meta.env.VITE_API_URL

export function useClaude() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getFeedback(question, answer) {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${API}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, answer })
      })

      if (!res.ok) {
        const errData = await res.json()
        throw new Error(errData.error || 'Server error')
      }

      const data = await res.json()
      return data
    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { getFeedback, loading, error }
}