import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ZipSearch from './components/ZipSearch/zipSearch';
import WeatherCard from './components/WeatherCard/weatherCard';
import { Skeleton } from '@mui/material';
// d35e9be47f58e6445fb0227b42fdeed2


function App() {
  const [isloading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  var date = new Date().getDay();


  console.log(date);
  useEffect(() => {
    const fetchData = ( async () => {const result = await axios.get('https://api.openweathermap.org/data/2.5/forecast?id=5128638&units=imperial&appid=d35e9be47f58e6445fb0227b42fdeed2')
      .then(function (response) {      
        setWeather(response.data);
        setLoading(false);

        console.log(response.data);
      })})
    
      fetchData()
  }, [])

  function zipWeather(zip) {
    // async () => { const result  = await axios.get()
    //   .then(function (resp) {
    //     setWeather(resp);
    //   })}
  }

  let arr=[];


  if(isloading){
    for(let i =5; i < 40; i+=8){
      arr.push(<Skeleton variant="rectangular" width={210} height={118} />)
    }

  }else{
    arr = [];
    
    for(let i =5; i < 40; i+=8){
      arr.push( <WeatherCard weather={weather.list[i]} date = {date++}/> )
    }
  }





  return (
    <div className="App">
      <header className="App-header">
        <h1>5-day Forecast</h1>
        {!isloading ? <h2>{weather.city.name}</h2> : ''}  
        <div style = {{display: 'flex', justifyContent: 'center'}}>
        {arr}
        </div>
      </header>

      <ZipSearch search={zipWeather} />
    </div>
  );
}

export default App;
