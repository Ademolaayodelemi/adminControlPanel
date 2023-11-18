import "./socialTable.scss";
// import * as React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer,  
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';
import { useState } from "react";
import { green } from "@mui/material/colors";




const SocialTable = ({tableData}) => {
  const [data, setData] = useState(tableData);

  return (
    <div className='socialTable'>
      {/* if you don't want the followcome container you can comment it like below */}
      {/* <TableContainer component={Paper} style={{ maxHeight: 600 }}> */}
      <Table sx={{ width: 750, backgroundColor: 'greennnn' }}  size='smalllll' aria-label="simple table"  className="tableWrapper">
        <TableHead >
          <TableRow className="tableHead">
          {/* The below "data[0].tableHead &&" only display the table head if there is data in data[0].tableHead*/}
          {/* With this, even if there are hundred of TableCell it will only dispplay the ones with data */}
            {data[0].tableHead1 && <TableCell className="tableHead">{data[0].tableHead1}</TableCell>}
            {data[0].tableHead2 && <TableCell className="tableHead" align="right">{data[0].tableHead2}</TableCell>}
            {data[0].tableHead3 && <TableCell className="tableHead" align="right">{data[0].tableHead3}</TableCell>}
            {data[0].tableHead4 && <TableCell className="tableHead" align="right">{data[0].tableHead4}</TableCell>}
            {data[0].tableHead5 && <TableCell className="tableHead" align="right">{data[0].tableHead5}</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },  maxHeight: 200}} 
            >
              {/* The below "row.myColumn &&" only display the table cell if there is data in row.myColumn*/}
              {/* with this, even if there are hundreds of TableCell it will only dispplay the ones with data */}
              {row.myColumn1 && <TableCell  component="th" scope="row">{row.myColumn1}</TableCell>}
              {row.myColumn2 && <TableCell align="right">{row.myColumn2}</TableCell>}
              {row.myColumn3 && <TableCell align="right">{row.myColumn3}</TableCell>}
              {row.myColumn4 && <TableCell align="right">{row.myColumn4}%</TableCell>}
              {row.myColumn5 && <TableCell align="right">{row.myColumn5}</TableCell>}
            </TableRow>
        ))}
        </TableBody>
      </Table>
    {/* </TableContainer> */}
      
    </div>
  )
}

export default SocialTable
