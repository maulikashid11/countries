import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './style.css'
import { ThemeContext } from './contexts/ThemeContext'
import { useState } from 'react'
export default function App() {
  const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')) || false)
  return (
    <ThemeContext value={[isDark,setIsDark]}>
      <Header />
      <Outlet />
    </ThemeContext>
  )
}
