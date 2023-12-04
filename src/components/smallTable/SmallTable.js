import "./smallTable.scss";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import { colums, rows } from "../../tableData";




const SmallTable = ({title, columns, rows}) => {
  const [data, setData] = useState(rows);


  return (
    <div className='smallTable'>
      <h4 className="headerTitle">{title}</h4>
      <Box
        sx={{ width: '98%', height: '100%'}}>
        <DataGrid
        className="recentTable"
          rows={data}
          columns={columns }
          sx={{
            // boxShadow: 2,
            // border: 0,
            // borderColor: 'primary.light',
            // '& .MuiDataGrid-cell:hover': {
              // color: 'primary.main',
              // borderColor: 'red',
            // },
          }}
          // initialState={{
          //   pagination: {
          //     paginationModel: {
          //       pageSize: 50,
          //     },
          //   },
          // }}
          pageSizeOptions={[5]}
          // checkboxSelection
          // disableRowSelectionOnClick
          />
      </Box>
    </div>
  )
}

export default SmallTable
