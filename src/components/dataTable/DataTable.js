import "./dataTable.scss";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";







const DataTable = ({title, columns, rows}) => {
  const [data, setData] = useState(rows);


  const myStyle = {
    // width: '100%', 
    height: '100%',
    position: 'relative',
    bottom: '10px',
    
  };

  return (
    <div className="dataTable">
      <h4 className="headerTitle">{title}</h4>



      <div style={myStyle}>
          {/* OR */}
      {/* <Box
      sx={{ 
          height: '100%', 
          width: '100%', 
      }}> */}

        <DataGrid
        className="recentTable"
          rows={data}
          columns={columns }
          sx={{
            // position: 'relative',
            // bottom: '10px',
            // right: '50px',
            // boxShadow: 2,
            // border: 0,
            // borderColor: 'primary.light',
            // '& .MuiDataGrid-cell:hover': {
            //   color: 'primary.main',
            // },
          }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 50,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          />
          {/* </div> */}
      </div>

    
      
      {/* </Box> */}
    </div>
  )
}

export default DataTable
