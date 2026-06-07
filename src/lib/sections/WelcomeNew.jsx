import React, { useEffect, useState } from 'react'

const featuredImages = [
  '/nice_photos/hackharvard_2024_singles-699.jpg',
  '/nice_photos/Copy of 6S1A2366.jpg',
  '/nice_photos/IMG_3354.jpg',
  '/nice_photos/hackharvard_2024_singles-186.jpg'
]

const notificationScriptUrl =
  'https://script.google.com/macros/s/AKfycbyIRz_Z6qh_2aCiYVS4cMpRxZgqkGyNzOil7cq3ArNSBC1o_UNBMXz7w9P7DPwK3jKksA/exec'

export default function WelcomeNew() {
  const [showModal, setShowModal] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!showModal) return

    function handleKeydown(e) {
      if (e.key === 'Escape') {
        setShowModal(false)
      }
    }

    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [showModal])

  useEffect(() => {
    if (!successMessage) return undefined
    const timeout = window.setTimeout(() => setShowModal(false), 3000)
    return () => window.clearTimeout(timeout)
  }, [successMessage])

  async function handleSubmit(event) {
    event.preventDefault()

    if (!firstName || !lastName || !email) {
      setErrorMessage('Please fill in all fields')
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    setSubmitting(true)
    setErrorMessage('')

    try {
      await fetch(notificationScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, timestamp: new Date().toISOString() })
      })

      setSuccessMessage(
        "Thank you! Applications are closed — we hope you had a great time. We'll share updates about future events."
      )
      setFirstName('')
      setLastName('')
      setEmail('')
    } catch (error) {
      console.error(error)
      setErrorMessage('Something went wrong. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative mx-auto w-full overflow-hidden" id="welcome">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="/nice_photos/20231021_152125.jpg"
          alt="HackHarvard event"
          className="absolute h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
          <h1 className="mb-4 font-exo text-5xl font-bold">WELCOME TO HACKHARVARD</h1>
          <p className="max-w-3xl text-xl">
            Where innovation meets community. Join hundreds of students from around the world on our
            campus to build, learn, and create.
          </p>
        </div>
      </div>

      <div className="relative bg-white px-6 py-20 dark:bg-gray-900 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <h2 className="mb-6 font-exo text-3xl font-bold dark:text-white">
                WHAT IS HACKHARVARD?
              </h2>
              <p className="mb-4 text-lg dark:text-gray-300">
                HackHarvard is a 36-hour undergraduate hackathon hosted at Harvard University. Every
                year, over 500 students from around the world come to our campus to build, learn,
                and create.
              </p>
              <p className="text-lg dark:text-gray-300">
                Applications for our 10th iteration of HackHarvard will open in mid 2025. Join us
                for an unforgettable experience where you'll meet fellow innovators, work with
                cutting-edge technologies, and push the boundaries of what's possible.
              </p>
            </div>
            <div className="h-full w-full overflow-hidden rounded-lg shadow-xl md:col-span-2">
              <img
                src="/nice_photos/Copy of 606A9181.jpg"
                alt="Students collaborating at HackHarvard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mb-24 grid grid-cols-1 gap-10 text-center md:grid-cols-3">
            <div className="transform rounded-2xl bg-white p-10 shadow-xl transition-transform hover:scale-105 dark:bg-gray-800">
              <div className="mb-4 font-exo text-5xl font-bold text-blue-600 dark:text-blue-400">
                500+
              </div>
              <p className="text-xl dark:text-gray-300">Students from around the world</p>
            </div>
            <div className="transform rounded-2xl bg-white p-10 shadow-xl transition-transform hover:scale-105 dark:bg-gray-800">
              <div className="mb-4 font-exo text-5xl font-bold text-purple-600 dark:text-purple-400">
                36
              </div>
              <p className="text-xl dark:text-gray-300">Hours of hacking</p>
            </div>
            <div className="transform rounded-2xl bg-white p-10 shadow-xl transition-transform hover:scale-105 dark:bg-gray-800">
              <div className="mb-4 font-exo text-5xl font-bold text-pink-600 dark:text-pink-400">
                10th
              </div>
              <p className="text-xl dark:text-gray-300">Anniversary in 2025</p>
            </div>
          </div>

          <h2 className="mb-8 text-center font-exo text-3xl font-bold dark:text-white">
            EXPERIENCE HACKHARVARD
          </h2>
          <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featuredImages.map((image, index) => (
              <div
                key={image}
                className="h-64 transform overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`HackHarvard moment ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 p-16 text-center shadow-lg">
            <h2 className="mb-6 font-exo text-4xl font-bold text-white">JOIN US IN 2025</h2>
            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-white/90">
              Be part of something extraordinary. Whether you are a seasoned hacker or just starting
              your coding journey, HackHarvard welcomes participants of all experience levels.
            </p>
            <button
              type="button"
              className="inline-block transform cursor-default rounded-full bg-white/40 px-8 py-4 font-bold text-gray-100 shadow-lg transition-all duration-300"
              aria-disabled="true"
              disabled
            >
              Applications Closed
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <button
            type="button"
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            aria-label="Close modal"
            onClick={() => setShowModal(false)}
          />
          <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <div
              className="inline-block w-full max-w-md transform rounded-xl bg-white p-6 shadow-2xl transition-all dark:bg-gray-800 sm:align-middle"
              style={{ maxHeight: '90vh', overflowY: 'auto' }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 id="modal-title" className="font-exo text-2xl font-bold dark:text-white">
                  Get Notified
                </h3>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => setShowModal(false)}
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {successMessage ? (
                <div
                  className="mb-4 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
                  role="alert"
                >
                  {successMessage}
                </div>
              ) : (
                <>
                  <p className="mb-4 dark:text-gray-300">
                    Enter your information below to receive updates about future HackHarvard events.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="mb-1 block text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="lastName"
                        className="mb-1 block text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="mb-1 block text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {errorMessage && (
                      <div
                        className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                        role="alert"
                      >
                        {errorMessage}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-bold text-white shadow transition-all hover:bg-blue-700 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <>
                          <svg
                            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Notify Me'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
