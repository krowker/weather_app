import { useEffect, useState } from "react";
import { useLocation } from './useLocation.js'
import key from '../key.js'
import chooseTemperatureFrase from "./helpers/fraseTemperature.js";
import getPicWeather from './helpers/getPicWeather.js'

function GetWeather() {
   const [lat, lon] = useLocation();
   const [data, setData] = useState({ main: {}, name: '' })
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const apiKey = key;

   useEffect(() => {
      if (!lat || !lon) return;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      fetch(apiUrl)
         .then(res => res.json())
         .then(
            (result) => {
               console.log(result)
               setData(result);
               setIsLoaded(true);
            },
            (error) => {
               setError(error);
               setIsLoaded(true);
            }
         )
   }, [lat, lon, apiKey])

   //'`${data.weather.0.main}'
   const imgUrl = getPicWeather('`${data.weather.0.main}')

   const style1 = {
      backgroundImage: 'url(' + imgUrl + ')',
   }

   if (error) {
      return <div>Ошибка: {error.message}</div>;
   } else if (!isLoaded) {
      return <div>Загрузка...</div>;
   } else {
      return (
         <div style={style1} className="mainBlock hero is-fullheight">
            <div className="hero-body">
               <div className="container">
                  <div className="forecast columns">
                     <div className="forecast_item nameCity column box has-text-centered">{data.name}</div>
                     <div className="forecast_item temp column box has-text-centered">{Math.floor(data.main.temp)}°C</div>
                  </div>
                  <div className="columns">
                     <div className="text column box has-text-centered">{chooseTemperatureFrase(data.main.temp)}</div>
                  </div>
               </div>
            </div>

         </div>

      );
   }
}

export default GetWeather