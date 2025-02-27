import React, { useEffect, useState } from 'react'
import Card from './Card'
import CardListShimmer from './CardListShimmer'

export default function CardList({ search, selectMenu }) {
    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then(data => {
            setCountriesData(data)
        })
    }, [])

    return (
        <div className="card-container">
            {
                countriesData.length === 0 ? <CardListShimmer /> :
                    countriesData.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()) && country.region.includes(selectMenu)).map((country) => {
                        return <Card key={country.name.common} country={country} />
                    })
            }
        </div>
    )
}
