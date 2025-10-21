const CountryList = ({ countries, onShow }) => {
      if (countries.length > 10)
            return <p>Too many matches, specify another filter</p>

      if (countries.length === 1)
            return <CountryDetails country={countries[0]} />

      return (
            <ul>
                  {countries.map(country => (
                        <li key={country.name.common}>
                              {country.name.common}{' '}
                              <button onClick={() => onShow(country)}>show</button>
                        </li>
                  ))}
            </ul>
      )
}

export default CountryList
