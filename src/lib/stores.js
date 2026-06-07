import { writable } from 'svelte/store'

function createTheme() {
  let initial = 'light'

  if (typeof document !== 'undefined') {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
      initial = stored
    } else if (document.documentElement.classList.contains('dark')) {
      initial = 'dark'
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      initial = 'dark'
    }
  }

  const { subscribe, set, update } = writable(initial)

  // Ensure document class matches initial on client
  if (typeof document !== 'undefined') {
    if (initial === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  function toggle() {
    update(theme => {
      const next = theme === 'light' ? 'dark' : 'light'
      if (typeof document !== 'undefined') {
        if (next === 'dark') document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
        try {
          localStorage.setItem('theme', next)
        } catch (e) {
          // Ignore storage failures in private/incognito mode
        }
      }
      return next
    })
  }

  function setTheme(value) {
    if (value !== 'dark' && value !== 'light') return
    set(value)
    if (typeof document !== 'undefined') {
      if (value === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      try {
        localStorage.setItem('theme', value)
      } catch (e) {
        // Ignore storage failures in private/incognito mode
      }
    }
  }

  return {
    subscribe,
    toggle,
    set: setTheme
  }
}

export const theme = createTheme()
