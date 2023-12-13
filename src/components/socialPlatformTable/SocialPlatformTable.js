import "./socialPlatformTable.scss";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { socialPlatformTableColumns, socialPlatformTableRows } from "../../tableData";

const SocialPlatformTable = () => {
  const [data, setData] = useState(socialPlatformTableRows);

  return (
    <div className='socialPlatformTable smallTable'>
      <h4 className="headerTitle">Platform Stats</h4>
      <Box
        sx={{ width: '100%', height: '100%', }}>
        <DataGrid
        className="recentTable"
          rows={data}
          columns={socialPlatformTableColumns }
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

export default SocialPlatformTable
