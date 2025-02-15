import Header from "./components/Header"
import { useState } from "react"

import './App.css'
import { Outlet } from "react-router-dom"
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext"

const App = () => {
    // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return (
        // <ThemeContext.Provider value={[isDark, setIsDark]}>
            <ThemeProvider>
            <Header />
            <Outlet />
            </ThemeProvider>
        // </ThemeContext.Provider>
    )
}

export default App