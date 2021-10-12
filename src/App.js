import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ZipSearch from './components/zipSearch';
import WeatherCard from './components/weatherCard';
// d35e9be47f58e6445fb0227b42fdeed2

// var date = new Date().getDay();

function App() {
  const [isloading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  var date = new Date().getDay();


  console.log(date);
  useEffect(() => {
    const fetchData = ( async () => {const result = await axios.get('http://api.openweathermap.org/data/2.5/forecast?id=5128638&units=imperial&appid=d35e9be47f58e6445fb0227b42fdeed2')
      .then(function (response) {      
        setWeather(response.data);
        setLoading(false);

        console.log(response.data);
      })})
    
      fetchData()
  }, [])

  let arr=[];


  if(isloading){
    
  }else{
    arr.push(<h2>{weather.city.name}</h2>)
    
    for(let i =5; i < 40; i+=8){
      arr.push( <WeatherCard weather={weather.list[i]} date = {date++}/> )
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>5-day Forecast</h1>
        {arr}
      </header>

      <ZipSearch />
    </div>
  );
}

export default App;
