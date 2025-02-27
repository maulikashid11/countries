import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ country }) {
    return (
        <Link to={`/${country.name.common}`} key={country.name.common} state={country} className="card">
            <img src={`${country.flags.svg}`} alt="" />
            <div className="content">
                <h3 className="flag-name">{country.name.common}</h3>
                <p className="flag-population">Population: {country.population.toLocaleString('hi-IN')}</p>
                <p className="region">Region: {country.region}</p>
                <p className="capital">Capital: {country.capital}</p>
            </div>
        </Link>
    )
}
