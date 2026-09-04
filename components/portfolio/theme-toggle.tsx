'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextDark = saved ? saved === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', nextDark)
    document.documentElement.classList.toggle('light', !nextDark)
    setDark(nextDark)
  }, [])

  const toggleTheme = () => {
    const nextDark = !dark
    document.documentElement.classList.toggle('dark', nextDark)
    document.documentElement.classList.toggle('light', !nextDark)
    window.localStorage.setItem('portfolio-theme', nextDark ? 'dark' : 'light')
    setDark(nextDark)
  }

  return <button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={15} /> : <Moon size={15} />}<span>{dark ? 'Light' : 'Dark'}</span></button>
}