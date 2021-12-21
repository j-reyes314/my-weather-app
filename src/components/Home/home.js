import { useEffect, useState } from 'react';
import axios from 'axios';
import ZipSearch from '../ZipSearch/zipSearch';
import WeatherCard from '../WeatherCard/weatherCard';
import { Skeleton } from '@mui/material';



export default function Home (props) {
    const [isloading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [query,setQuery] = useState('id=5128638');


  var date = new Date().getDay();

  const fetchData = ( async (query) => {const result = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?${query}&units=imperial&appid=d35e9be47f58e6445fb0227b42fdeed2`)
      .then(function (response) {      
        setWeather(response.data);
        setLoading(false);
        console.log(response.data);
      })})

  useEffect(() => {
    
    fetchData(query);

  }, [query])

  function searchZip(zip) {
    setQuery(`zip=${zip}`);
  }

  let arr=[];


  if(isloading){
    for(let i =5; i < 40; i+=8){
      arr.push(<Skeleton key= {i} variant="rectangular" width={210} height={118} />)
    }

  }else{
    arr = [];

    for(let i =5; i < 40; i+=8){
      arr.push( <WeatherCard key={weather.list[i].dt} weather={weather.list[i]} date = {date++}/> )
    }
  }


return (<div className="App">
        <header className="App-header">
        <h1 style={{padding:'0'}}>5-day Forecast</h1>
          {!isloading ? <h2>{weather.city.name}</h2> : ''}  
          <div style = {{display: 'flex', justifyContent: 'center'}}>
          {arr}
          </div>

        <ZipSearch search={searchZip} />
        </header>
        
      </div>
)
}