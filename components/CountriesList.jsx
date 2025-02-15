import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import CountriesListShimmer from "./CountriesListShimmer"

export default function CountriesList({ query }) {
    const [countriesData, setCountriesData] = useState([])

    // const [filteredData,setQuery] = useFilter(data,()=>'')

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then((data) => {
                setCountriesData(data)
            })
    }, [])
    return (
        <>

            {!countriesData.length ? <CountriesListShimmer /> : <div className="countries-container">
                {
                    countriesData.filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)).map((country) => {
                        return <CountryCard key={country.name.common} name={country.name.common} flag={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital?.[0]} data={country}/>
                    })
                }
            </div>}
        </>
    )
}
