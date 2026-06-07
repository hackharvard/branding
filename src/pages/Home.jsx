import React from 'react'
import Nav from '../lib/components/Nav'
import Footer from '../lib/components/Footer'
import Landing from '../lib/sections/Landing'
import WelcomeNew from '../lib/sections/WelcomeNew'
import Tracks from '../lib/sections/Tracks'
import Faq from '../lib/sections/Faq'

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="mt-20">
        <Landing />
        <WelcomeNew />
        <Tracks />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
