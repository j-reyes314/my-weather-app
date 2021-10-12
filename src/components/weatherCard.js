import { useState } from "react";

export default function WeatherCard (props) {
    const weather = props.weather;
    console.log(props.date);
    const[week, setWeek] = useState(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'])
    console.log(week[props.date])

    return(
        
       
       <p>{weather.main.temp}</p>
    )
}