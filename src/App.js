import React, { useState, useEffect } from 'react';
import './Components/Styles/App.scss';

import NavBar from './Components/NavBar';
import Details from './Components/Details';

function App() {

  const [currentData, updatedCurrentData] = useState([]);

  let getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchCurrentData);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  let fetchCurrentData = (position, location) => {
    if (location == undefined) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=74b6058dd8f54ec484c41910220501&q=${position.coords.latitude},${position.coords.longitude}`
      )
        .then((res) => res.json())
        .then((data) => {
          updatedCurrentData(data);
        });
    } else {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=74b6058dd8f54ec484c41910220501&q=${location}`
      )
        .then((res) => res.json())
        .then((data) => {
          updatedCurrentData(data);
        });
    }
  }

  // useEffect(() => {
  //   console.log(currentData);
  // }, [currentData])

  return (
    <main className="App">
      <section className='main'>
        <NavBar />
        <Details getLocation={getLocation} fetchCurrentData={fetchCurrentData} currentData={currentData} />
      </section>
    </main>
  );
}

export default App;
