'use client'

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './App.css'



const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCl7t5uDpJIrb82BlD4kVw3AMg_qnNMIqA",
  });
  const center = useMemo(() => ({ lat: -25.52043, lng: -47.856743 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
             <Marker position={{ lat: -25.52043, lng: -47.856743 }} />
             <Marker position={{ lat: -26.52043, lng: -47.156743 }} />
             <Marker position={{ lat: -24.52043, lng: -47.956743 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default App;