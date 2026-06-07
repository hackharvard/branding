import React, { useState } from 'react'
import NavSponsors from './NavSponsors'

export default function SponsorsForm() {
  const [formData, setFormData] = useState({
    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    sponsorName: '',
    contactName: '',
    email: '',
    additionalInfo: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  function validateForm() {
    const e = {}
    if (!formData.sponsorName.trim()) e.sponsorName = 'Sponsor/Organization name is required'
    if (!formData.contactName.trim()) e.contactName = 'Primary contact name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = 'Please enter a valid email address'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setSubmitMessage('')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setSubmitMessage(
          'Thank you! Your sponsorship inquiry has been sent successfully. We will be in touch soon!'
        )
        setFormData({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          sponsorName: '',
          contactName: '',
          email: '',
          additionalInfo: ''
        })
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
      }
    } catch (err) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <NavSponsors />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="mx-auto my-0 max-w-6xl px-6 py-20">
          <section className="mb-4" id="about">
            <h2 className="mb-10 text-center font-exo text-3xl font-bold text-black dark:text-white">
              SPONSOR HACKHARVARD
            </h2>
            <div className="mx-auto max-w-5xl">
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                We are thrilled that you are interested in sponsoring Harvard University's premier
                undergraduate hackathon. This is a place where the brightest young minds come
                together to create innovative technological solutions to global challenges.
              </p>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                <span className="font-semibold">HackHarvard USA</span> will take place{' '}
                <span className="font-semibold">October 3-5, 2025</span> in Cambridge, Massachusetts
                at the Science and Engineering Complex, bringing together talented undergraduates
                with industry leaders and academic mentors.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                For more details regarding sponsoring HackHarvard, we recommend that you complete
                the sponsorship form below or contact us at{' '}
                <a
                  href="mailto:sponsors@hackharvard.io"
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  sponsors@hackharvard.io
                </a>
                . We look forward to supporting your organization at HackHarvard!
              </p>
            </div>
          </section>
        </div>

        <div className="my-0 min-h-screen bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-6">
            <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
              Sponsorship Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="hidden" id="access_key" name="access_key" value={formData.access_key} />
              <div className="text-center">
                <label
                  htmlFor="sponsor-name"
                  className="mb-3 block text-lg font-medium text-gray-700 dark:text-gray-300"
                >
                  Sponsor/Organization Name *
                </label>
                <input
                  type="text"
                  id="sponsor-name"
                  value={formData.sponsorName}
                  onChange={e => setFormData({ ...formData, sponsorName: e.target.value })}
                  className={`h-10 w-80 max-w-full rounded-lg border-2 border-gray-300 px-4 text-gray-900 transition-colors focus:border-red-500 focus:outline-none ${
                    errors.sponsorName ? 'border-red-500' : ''
                  }`}
                  placeholder="Your organization name"
                />
                {errors.sponsorName && (
                  <p className="mt-2 text-sm text-red-500">{errors.sponsorName}</p>
                )}
              </div>

              <div className="text-center">
                <label
                  htmlFor="contact-name"
                  className="mb-3 block text-lg font-medium text-gray-700 dark:text-gray-300"
                >
                  Primary Contact Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={formData.contactName}
                  onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                  className={`h-10 w-80 max-w-full rounded-lg border-2 border-gray-300 px-4 text-gray-900 transition-colors focus:border-red-500 focus:outline-none ${
                    errors.contactName ? 'border-red-500' : ''
                  }`}
                  placeholder="Your full name"
                />
                {errors.contactName && (
                  <p className="mt-2 text-sm text-red-500">{errors.contactName}</p>
                )}
              </div>

              <div className="text-center">
                <label
                  htmlFor="contact-email"
                  className="mb-3 block text-lg font-medium text-gray-700 dark:text-gray-300"
                >
                  Contact Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className={`h-10 w-80 max-w-full rounded-lg border-2 border-gray-300 px-4 text-gray-900 transition-colors focus:border-red-500 focus:outline-none ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="text-center">
                <label
                  htmlFor="additional-info"
                  className="mb-3 block text-lg font-medium text-gray-700 dark:text-gray-300"
                >
                  Additional Information
                </label>
                <textarea
                  id="additional-info"
                  value={formData.additionalInfo}
                  onChange={e => setFormData({ ...formData, additionalInfo: e.target.value })}
                  rows="4"
                  className="resize-vertical w-80 max-w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-red-500 focus:outline-none"
                  placeholder="Tell us about your sponsorship interests, budget range, or any specific questions..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer rounded-lg bg-red-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>

              {submitMessage && (
                <div className="mt-6 text-center">
                  <div
                    className={`inline-block rounded-lg px-6 py-4 ${
                      submitMessage.includes('successfully')
                        ? 'border border-green-300 bg-green-100 text-green-800'
                        : 'border border-red-300 bg-red-100 text-red-800'
                    }`}
                  >
                    {submitMessage}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
