import React, { useEffect } from 'react'
import SponsorsForm from '../lib/components/SponsorsForm'
import Footer from '../lib/components/Footer'
import { useTheme } from '../lib/context/ThemeContext'

export default function SponsorsPage() {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  return (
    <div>
      <SponsorsForm />
      <Footer />
    </div>
  )
}
