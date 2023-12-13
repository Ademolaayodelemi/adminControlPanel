import "./socialDeviceTable.scss";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { socialDeviceTableColumns, socialDeviceTableRows } from "../../tableData";

const SocialDeviceTable = () => {
  const [data, setData] = useState(socialDeviceTableRows);

  return (
    <div className='socialDeviceTable smallTable'>
      <h4 className="headerTitle">Device Stats</h4>
      <Box
        sx={{ width: '100%', height: '100%', }}>
        <DataGrid
        className="recentTable"
          rows={data}
          columns={socialDeviceTableColumns }
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

export default SocialDeviceTable
