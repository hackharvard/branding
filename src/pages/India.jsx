import React, { useEffect } from 'react'

const INDIA_BROCHURE_URL = 'https://drive.google.com/file/d/1P7PkhxhnTS4_NUaMsWmm9DgmTnQ_uKGl/view'

export default function IndiaPage() {
  useEffect(() => {
    window.location.href = INDIA_BROCHURE_URL
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6 text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-xl text-center">
        <h1 className="mb-4 text-3xl font-bold">Redirecting to HackHarvard India materials</h1>
        <p className="mb-6 text-lg">
          If the browser does not redirect automatically, click the button below to continue.
        </p>
        <a
          href={INDIA_BROCHURE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-red-600 px-6 py-3 text-white hover:bg-red-700"
        >
          Open India Brochure
        </a>
      </div>
    </div>
  )
}
