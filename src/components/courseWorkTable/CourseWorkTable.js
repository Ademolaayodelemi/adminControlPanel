import "./courseWorkTable.scss";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { courseWorkTableColumns, courseWorkTableRows } from "../../tableData";

const CourseWorkTable = () => {
  const [data, setData] = useState(courseWorkTableRows);

  return (
    <div className='courseWorkTable smallTable'>
      <h4 className="headerTitle">Recent Project</h4>
      <Box
        sx={{ width: '100%', height: '100%', }}>
        <DataGrid
        className="recentTable"
          rows={data}
          columns={courseWorkTableColumns }
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

export default CourseWorkTable
