
import weatherService from "../services/weather";
import { useEffect, useState } from "react";

const Country = ({ country, weather, setWeather }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    weatherService.getWeatherCountry(country.capital)
      .then(response => {
        setWeather(response)
        const iconCode = response.weather[0].icon;
        if (iconCode) {
          const iconUrl = weatherService.getIcon(iconCode);
          setIcon(iconUrl);
        }
      });

  }, [country.capital]);
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
      <img src={country.flags.png} width={200} />
      {weather ?
        <>
          <h2>Wheater in {country.name.common}</h2>
          <p>Temperature {Number((weather.main.temp-273.15).toFixed(2))} Celsius</p>
          <img src={icon}></img>
          <p>Wind {weather.wind.speed} m/s</p>
          <></>
        </> : <p>Cargando clima ...</p>
      }
    </div>
  );

}

export default Country;