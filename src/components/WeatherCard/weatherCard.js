import { useState } from "react";
import {Card} from '@mui/material';
import './WeatherCard.css'
import {ReactComponent as Clear} from '../../assets/clear-day.svg';
import {ReactComponent as Drizzle} from '../../assets/drizzle.svg';
import {ReactComponent as Overcast} from '../../assets/overcast.svg';
import {ReactComponent as Rain} from '../../assets/rain.svg';
import {ReactComponent as Snow} from '../../assets/snow.svg';
import {ReactComponent as Storm} from '../../assets/thunderstorms.svg';
import { CardActionArea } from '@mui/material';


export default function WeatherCard (props) {
    const weather = props.weather;
    console.log(weather);
    const[week, setWeek] = useState(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'])
    const[weatherType, setType] = useState(weather.weather[0].main)
    console.log(weather.weather[0].main)
    console.log(week[props.date])

    var icon = <div></div>;
    switch(weatherType) {
        case 'Clouds':
            icon = <Overcast/>
            break;
        case 'Rain':
            icon = <Rain/>
            break;
        case 'Clear':
            icon = <Clear/>
            break;
        case 'Snow':
            icon = <Snow/>
            break;
    }

    function Capitalize(str) {
       return str = str.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }

    return(
        <div>
            <Card  sx ={{margin: '1em', minWidth: 200}} raised ={true}>
                <CardActionArea >
                    {icon}
                    <h3>{week[props.date]}</h3>
                    <p>{weather.main.temp} &deg;F</p>
                    <h6>{Capitalize(weather.weather[0].description)}</h6>
                </CardActionArea>
            </Card>
        </div>
       
    )
}