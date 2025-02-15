import { useTheme } from "../hooks/useTheme"

export default function Header() {
    const [isDark,setIsDark]  = useTheme()
    return (
        <header className={`header-container ${isDark?'dark':''}`}>
            <div className="header-content">
                <h2 className="title"><a href="/">Where in the world?</a></h2>
                <p onClick={() => {  setIsDark(!isDark)
                    localStorage.setItem('isDarkMode',!isDark)
                }} className="theme-changer"><i className={`fa-regular fa-${isDark ? 'sun':'moon'}`}></i>&nbsp;&nbsp;{isDark?'Light':'Dark'} Mode</p>
            </div>
        </header>
    )
}
