import React, { useEffect, useState} from 'react'
import './App.css';
import key from './key.js';

function App() {
  const [data, setData] = useState({})
  const [lat, setLat] = useState();
  const [lon, setLong] = useState();
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const apiKey = key;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data)
    });
    
    console.log(data);
  }, [lat, lon])  

  return (
    <div className="App">
      <p>Город: {data.name}</p>
      <p>Температура: {
        data.main === undefined ? <span>error</span> : <span>{data.main.temp}</span>
      }</p>
    </div>
  );
}
export default App;
