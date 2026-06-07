import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HackHarvardUndergraduateHackathonPage() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { replace: true })
  }, [navigate])

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6 text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-xl text-center">
        <h1 className="mb-4 text-3xl font-bold">Redirecting to HackHarvard home</h1>
        <p className="mb-6 text-lg">
          This page has moved. You are being redirected to the main site.
        </p>
        <button
          type="button"
          onClick={() => navigate('/', { replace: true })}
          className="inline-block rounded-full bg-red-600 px-6 py-3 text-white hover:bg-red-700"
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}
