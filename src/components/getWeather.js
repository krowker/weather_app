import { useEffect, useState } from "react";
import { useLocation } from './useLocation.js'
import key from '../key.js'

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
   }, [lat,lon,apiKey])


   if (error) {
      return <div>Ошибка: {error.message}</div>;
   } else if (!isLoaded) {
      return <div>Загрузка...</div>;
   } else {
      return (
         <>
            <p>Город: {data.name}</p>
            <p>Температура: {
               data.main === undefined ?
                  <span>Загрузка...</span> : <span>{data.main.temp}</span>
            }</p>
            <p>{lat}</p>
            {/* <p>{data.main.feels_like}</p> */}
            <p>{lon}</p>
         </>
      );
   }

   // return (
   //    <>
   //    <p>Город: {data.name}</p>
   //    <p>Температура: {
   //      data.main === undefined ? <span>error</span> : <span>{data.main.temp}</span>
   //    }</p>
   //    <p>{lat}</p>
   //    <p>{lon}</p>
   //    </>
   // );

}

export default GetWeather