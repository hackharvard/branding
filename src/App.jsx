import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChinaPage from './pages/China'
import SponsorsPage from './pages/Sponsors'
import WhatPage from './pages/What'
import IndiaPage from './pages/India'
import VietnamPage from './pages/Vietnam'
import HackHarvardUndergraduateHackathonPage from './pages/HackHarvardUndergraduateHackathon'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/china" element={<ChinaPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/what" element={<WhatPage />} />
        <Route path="/india" element={<IndiaPage />} />
        <Route path="/vietnam" element={<VietnamPage />} />
        <Route
          path="/hackharvardundergraduatehackathon"
          element={<HackHarvardUndergraduateHackathonPage />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
