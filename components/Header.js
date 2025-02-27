import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import {useEffect} from 'react'


export default function Header() {
    const [isDark,setIsDark] = useContext(ThemeContext)
    useEffect(()=>{
        setIsDark(JSON.parse(localStorage.getItem('isDark')))
    },[])
    return (
        <div className={`header ${isDark ? 'dark':''}`}>
            <h2 >Where in the world?</h2>
            <div className="theme-mode" onClick={()=>{
                setIsDark(!isDark)
                localStorage.setItem('isDark',!isDark)
                }}>
                <i className={`fa-solid fa-${isDark?'sun':'moon'}`}></i>
                <p className="theme-text">{isDark?'Light':'Dark'} mode</p>
            </div>
        </div>
    )
}
