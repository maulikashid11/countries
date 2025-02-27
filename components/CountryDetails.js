import React, { useContext, useEffect, useState } from 'react'
import './CountryDetails.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import CountryDetailsShimmer from './CountryDetailsShimmer'

export default function CountryDetails() {
    const {state} = useLocation()
    const { country } = useParams()
    const [countryDetails, setCountryDetails] = useState({})
    const [countryFound, setCountryFound] = useState(true)
    const [isDark] = useContext(ThemeContext)

    const updateCountryDetails=(data)=>{
        setCountryDetails({
            name: data.name.common,
            flag: data.flags.svg,
            nativeName: Object.values(data.name.nativeName)[0].common,
            population: data.population.toLocaleString('hi-IN'),
            region: data.region,
            subRegion: data.subregion,
            capital: data.capital.join(', '),
            tld: data.tld,
            currencies: Object.values(data.currencies).map((currency) => {
                return currency.name
            }).join(', '),
            languages: Object.values(data.languages).join(', '),
            borders: []
        })

        if (!data.borders) {
            data.borders = []
            return
        }
        Promise.all(data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`).then(res => res.json()).then(([borderName]) => {
                return borderName.name.common
            })
        })).then((border) => {
            setTimeout(() => {
                setCountryDetails((prevState) => ({ ...prevState, borders: [...prevState.borders, ...border] }))
            }, 100)
        })
    }

    useEffect(() => {

        if(state){
            updateCountryDetails(state)
            return 
        }

        fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`).then(res => res.json()).then(([data]) => {
            updateCountryDetails(data)
        }).catch(() => {
            setCountryFound(false)
        })
    }, [country])

    return (
        countryFound != false ? <main className={`country-details ${isDark ? 'dark' : ''}`}>
            <button onClick={() => { history.back() }}>Back</button>
            {Object.keys(countryDetails).length !== 0 ? <div className="country-container">
                <img src={countryDetails.flag} alt="" />
                <div className="country">
                    <h2 className="country-name">{countryDetails.name}</h2>
                    <div className="country-content">
                        <p className="native-name">Native Name: {countryDetails.nativeName}</p>
                        <p className="population">Population : {countryDetails.population}</p>
                        <p className="region">Region : {countryDetails.region}</p>
                        <p className="sub-region">Sub Region : {countryDetails.subRegion}</p>
                        <p className="Capital">Capital : {countryDetails.capital}</p>
                        <p className="top-level-domain">Top Lever Domain: {countryDetails.tld}</p>
                        <p className="currencies">Currencies : {countryDetails.currencies}</p>
                        <p className="languages">Languages: {countryDetails.languages}</p>
                    </div>
                    <div className="border-countries">
                        <span>Border-countries:</span>
                        <div className="border-countries-name">
                            {
                                countryDetails.borders != [] && countryDetails.name ? countryDetails.borders.map((border) => {
                                    return <Link key={border} to={`/${border}`}>{border}</Link>
                                }) : ''
                            }

                        </div>
                    </div>
                </div>
            </div>
                : <CountryDetailsShimmer />}
        </main> : <h2>Country not found</h2>

    )
}
