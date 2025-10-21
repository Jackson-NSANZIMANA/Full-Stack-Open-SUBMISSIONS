import Weather from './Weather'

const CountryDetails = ({ country }) => {
      return (
            <div>
                  <h1>{country.name.common}</h1>
                  <p>Capital: {country.capital}</p>
                  <p>Area: {country.area}</p>

                  <h3>Languages:</h3>
                  <ul>
                        {Object.values(country.languages || {}).map(lang =>
                              <li key={lang}>{lang}</li>
                        )}
                  </ul>

                  <img src={country.flags.png} alt={country.flags.alt} width={150} />

                  <Weather capital={country.capital} />
            </div>
      )
}

export default CountryDetails
