import { Paper, 
        Table, 
        TableBody, 
        TableCell, 
        TableContainer, 
        TableHead, 
        TablePagination, 
        TableRow 
} from "@mui/material"
import { maxHeight } from "@mui/system"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import './dayWeather.css';



export default function DayWeather(props) {

    const {id} = useParams();
    const {data, loading, err} = useFetch("https://api.openweathermap.org/data/2.5/forecast?id=5128638&units=imperial&appid=d35e9be47f58e6445fb0227b42fdeed2")
    console.log(data);

    function createData(data) {
        const hour =data.dt_txt.substring(11,16);
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].main;

        return {hour,temperature,humidity,description };
    }
    
    const columns =[{id: 'hour',label:'Hour', minWidth: 170},
        {id: 'temperature',label: 'Temperature(Fahrenheit)', minWidth: 170},
        {id: 'humidity',label: 'Humidity', minWidth:170},
        {id: 'description',label: 'Description', minWidth:170},
        // {id:,label:, minWidth:170},
        // {id:,label:, minWidth:170},
    ]
    const rows =[];

    if(data){
        
        for(let i =0; i< data.list.length; i++) {
            if(data.list[i].dt_txt.substring(0,10) == id)          rows.push(createData(data.list[i]))
        }
    }
    
    return(
        <div className ="dayTable">
            <h1>Single Day Forecast</h1>
            <div style ={{padding: '1em'}}>
                {loading ? <h3>Loading...</h3> :<Paper sx={{width:'100%', overflow: 'hidden'}}>
                    <TableContainer sx= {{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label='sticky table'>
                            <TableHead>

                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                        key={column.id}
                                        // align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                                
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {
                                    return (
                                        <TableRow hover key={row.code}>
                                            {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                {value}
                                                </TableCell>
                                            );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>}
            </div>
        </div>
    )
}