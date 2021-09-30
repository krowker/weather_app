import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const apiKey = "6f3e620af43ddfebe8ad93327e8f2b6e";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

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
        console.log(data);
      });

  }, [lat, long]);

  // fetch(apiUrl)
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   setData(data)
  //   console.log(data);
  // });

  return (
    <div className="App">
      <p>Город:{data.name}</p>
      <p>Температура:</p>
    </div>
  );
}

export default App;
