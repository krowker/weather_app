import { useEffect, useState } from "react";

export const useLocation = () => {
   const [lat, setLat] = useState();
   const [lon, setLong] = useState();

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
         setLat(position.coords.latitude);
         setLong(position.coords.longitude);
      });
   }, [])
   return [lat, lon]
}