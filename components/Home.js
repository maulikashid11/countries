import React, { useContext, useState } from 'react'
import CardList from './CardList'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Home() {
  const [isDark] = useContext(ThemeContext)
  const [search,setSearch] = useState('')
  const [selectMenu,setSelectMenu] = useState('')
  return (
    <main className={`home ${isDark ? 'dark':''}`}>
        <div className="search-filter">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for country..." value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          </div>
          <div className="filter">
            <select name="filter" id="filter" onChange={(e)=>{setSelectMenu(e.target.value)
            }}>
              <option value="">Filter-by-region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        <CardList search={search} selectMenu={selectMenu}/>
      </main>
  )
}
