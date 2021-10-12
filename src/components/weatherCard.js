import { useState } from "react";

export default function WeatherCard (props) {
    const weather = props.weather;
    console.log(weather);
    const[week, setWeek] = useState(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'])
    console.log(week[props.date])

    return(
        <div>
            <h3>{week[props.date]}</h3>
       <p>{weather.main.temp} &deg;F</p>

            <h6>{weather.weather[0].description}</h6>
        </div>
       
    )
}