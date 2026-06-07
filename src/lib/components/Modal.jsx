import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export default function Modal({ className, speaker = {}, children }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <>
      <button className={clsx(className)} type="button" onClick={() => setOpen(true)}>
        {children}
      </button>

      {open && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center bg-white/70 backdrop-blur-xl dark:bg-secondary/70">
          <div className="px-dynamic flex h-full w-full items-center justify-center">
            <div
              ref={ref}
              className="flex h-2/3 max-w-xl flex-col rounded-lg bg-white p-10 dark:bg-secondary"
            >
              <div className="mb-5 flex shrink-0 items-center justify-between">
                <h1 className="text-xl uppercase">{speaker.name}</h1>
                <button className="shrink-0" type="button" onClick={() => setOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-8 w-8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="h-full gap-8 overflow-hidden overflow-y-auto">
                <div className="mb-4 font-bold">{speaker.role}</div>
                <p>{speaker.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
