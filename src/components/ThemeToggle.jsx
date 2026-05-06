import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

function ThemeToggle({ isDark, toggle }) {
  // Use passed props if available, otherwise fallback to local state for compatibility
  const [localTheme, setLocalTheme] = useState(localStorage.getItem('theme') || 'dark')
  
  const currentTheme = typeof isDark !== 'undefined' ? (isDark ? 'dark' : 'light') : localTheme

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  const handleToggle = () => {
    if (toggle) {
      toggle()
    } else {
      setLocalTheme(prev => prev === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <button 
      onClick={handleToggle}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle Theme"
    >
      {currentTheme === 'light' ? <Moon className="w-5 h-5 text-[var(--primary-teal)]" /> : <Sun className="w-5 h-5 text-[var(--accent-teal)]" />}
    </button>
  )
}

export default ThemeToggle
