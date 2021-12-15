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



export default function DayWeather(props) {

    return(
        <Paper sx={{width:'100%', overflow: 'hidden'}}>
            <TableContainer sx= {{ maxHeight: 440 }}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}