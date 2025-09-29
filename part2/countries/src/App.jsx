import { useState, useEffect } from 'react'
import Browser from './components/Browser';
import Country from './components/Country'
import countriesService from './services/countries'
import weatherService from './services/weather';

function App() {
  const [countries, setCountries] = useState([]);
  const [browser, setBrowser] = useState('');
  const [list, setList] = useState([]);
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    countriesService.getAll().then(returnedCountries => {
      setCountries(returnedCountries);
    });
  }, []);

  const onChangeBrowser = (event) => {
    const value = event.target.value;
    setBrowser(value);

    const filtered = countries.filter(c =>
      c.name.common.toLowerCase().includes(value.toLowerCase())
    );

    if (filtered.length > 10) {
      setList('Too many matches, speciffy another filter');
      setCountry(null);
      setWeather(null);
    } else if (filtered.length > 1) {
      setList(filtered);
      setCountry(null);
      setWeather(null);
    } else if (filtered.length === 1) {
      setList([]);
      countriesService.getCountry(filtered[0].name.common)
      .then(response => setCountry(response));
    } else {
      setList([]);
      setCountry(null);
      setWeather(null);
    }
  }


  const handleShow = (name) =>{
    console.log(name);
    countriesService.getCountry(name)
      .then(response => setCountry(response));

    setList([]);
  }

  console.log(country);
  return (
    <>
      <Browser browser={browser} onChangeBrowser={onChangeBrowser}></Browser>
      <div>
        {typeof list === 'string' ? (
          <div>{list}</div>
        ) : list.length > 1 ? (
          list.map(c => (
            <div key={c.cca3}>
              {c.name.common} <button onClick={() => handleShow(c.name.common)}>Show</button>
              <br />
            </div>
          ))
        ) : country ? (
          <Country country={country} weather={weather} setWeather={setWeather}></Country>
        ) : (
          <div>No encontrado</div>
        )}
      </div>
    </>
  )
}

export default App
