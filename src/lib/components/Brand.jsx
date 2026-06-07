import React from 'react'

export default function Brand() {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-md border border-gray-200 p-2 dark:border-secondary">
        <a
          id="mlh-trust-badge"
          style={{
            display: 'block',
            maxWidth: '100px',
            minWidth: '60px',
            position: 'fixed',
            left: '50px',
            top: 0,
            width: '10%',
            zIndex: 10000
          }}
          href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
            alt="Major League Hacking 2026 Hackathon Season"
            style={{ width: '100%' }}
          />
        </a>
        <a className="shrink-0" href="/">
          <img className="ms-24 h-10" src="/logo.svg" alt="" />
        </a>
      </div>
    </div>
  )
}
