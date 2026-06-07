import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { uniqueId } from 'lodash-es'

const elements = new Set()

export default function Disclosure({ className, title, children }) {
  const [open, setOpen] = useState(false)
  const id = useRef(uniqueId('disclosure-'))

  useEffect(() => {
    const obj = { id: id.current, close: () => setOpen(false) }
    elements.add(obj)
    return () => elements.delete(obj)
  }, [])

  function toggle() {
    if (!open) {
      elements.forEach(el => el.close())
    }
    setOpen(v => !v)
  }

  return (
    <div>
      <button
        className={clsx(
          'flex w-full items-center justify-between rounded-md border border-gray-200 p-3 shadow',
          className
        )}
        type="button"
        onClick={toggle}
      >
        <div className="text-base font-bold text-blue-900 dark:text-blue-200 md:text-lg">
          {title}
        </div>
        <svg
          className={clsx('h-5 w-5 transition-all', open && 'rotate-180')}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && <div className="p-3 text-base md:text-lg">{children}</div>}
    </div>
  )
}
