import React from 'react'

export default function Marquee({ theme = 'auto' }) {
  const themeClass =
    theme === 'auto'
      ? 'border-black text-black dark:border-white dark:text-white'
      : theme === 'light'
      ? 'border-white text-white'
      : 'border-black text-black'

  return (
    <div
      className={`flex w-full select-none gap-10 overflow-hidden border-b-4 border-t-4 py-2 text-2xl font-bold uppercase ${themeClass}`}
    >
      {[0, 1].map(i => (
        <div key={i} className="marquee flex min-w-full shrink-0 justify-around gap-10">
          <span>Applications open soon</span>
          <span>HackHarvard 2025</span>
          <span>Applications open soon</span>
          <span>HackHarvard 2025</span>
        </div>
      ))}

      <style>{`
        .marquee { animation: marquee 10s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(calc(-100% - 2.5rem)); } }
        @media (prefers-reduced-motion: reduce) { .marquee { animation-play-state: paused; } }
      `}</style>
    </div>
  )
}
