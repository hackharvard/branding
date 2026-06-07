import React from 'react'

export default function TrackModal({ isOpen, title, description, icon, onClose }) {
  if (!isOpen) return null

  function handleBackdrop() {
    onClose && onClose()
  }
  function handleKey(e) {
    if (e.key === 'Escape') onClose && onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0"
      onKeyDown={handleKey}
      tabIndex={-1}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleBackdrop}
        role="button"
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-2xl rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800">
        <button
          className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          onClick={() => onClose && onClose()}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col">
          <div className="mb-4 flex items-center">
            {icon && <div className="mr-4 text-3xl">{icon}</div>}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Track: {title}</h3>
          </div>
          <div className="mt-2 text-gray-700 dark:text-gray-300">
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
