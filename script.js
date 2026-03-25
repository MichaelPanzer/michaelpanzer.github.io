const body = document.body

const setTheme = (isDark) => {
  body.classList.remove('dark', 'light')
  
  if (isDark) {
    body.classList.add('dark')
  } else {
    body.classList.add('light')
  }
}

// Apply theme based on system/OS preference
const applySystemTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  setTheme(prefersDark)
}

// Listen for OS theme changes while the user is on the site
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', (e) => {
  setTheme(e.matches)
})

document.addEventListener('DOMContentLoaded', applySystemTheme)