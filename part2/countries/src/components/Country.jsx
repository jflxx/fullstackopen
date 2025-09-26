const Country = ({country}) =>{
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>
            <h2>Languages</h2>
            <ul>
              {Object.values(country.languages).map(lg => (
                <li key={lg}>{lg}</li>
              ))}
            </ul>
            <img src={country.flags.png} width={200}/>

          </div>
    );

}

export default Country;