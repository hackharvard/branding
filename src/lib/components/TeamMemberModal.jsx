import React from 'react'

export default function TeamMemberModal({ isOpen, name, bio, image, onClose }) {
  if (!isOpen) return null

  function handleBackdropClick() {
    onClose && onClose()
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') onClose && onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleBackdropClick}
        role="button"
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800">
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
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={name}
            className="mb-4 h-24 w-24 rounded-full border-2 border-gray-200 object-cover dark:border-gray-700"
          />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
          <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
