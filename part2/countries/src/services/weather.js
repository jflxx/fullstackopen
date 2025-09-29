import axios from 'axios'
const apiKey = import.meta.env.VITE_SOME_KEY;
const baseUrl = 'https://api.openweathermap.org'

const getWeatherCountry = (name) => {
    const request = axios.get(`${baseUrl}/data/2.5/weather?q=${name}&appid=${apiKey}`);
    return request.then(reponse => reponse.data);
}

const getIcon = (name) =>{
    return `https://openweathermap.org/img/wn/${name}@2x.png`;
}
 
export default { getWeatherCountry, getIcon};