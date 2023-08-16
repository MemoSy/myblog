"use client"
import { useContext } from 'react'
import './DarkModeToggle.css'
import { ToggleTheme } from '@/Contexts/ToggleTheme'

const DarkModeToggle = () => {
  
  const {toggle} = useContext(ToggleTheme)

  return (
    <div>
      <label class="switch">
        <input type="checkbox" onClick={toggle} />
        <span class="slider"></span>
      </label>
    </div>
  )
}

export default DarkModeToggle
