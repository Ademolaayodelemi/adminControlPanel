import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { newApplicantsColumns, newApplicantsRows } from "../../tableData";

const NewApplicantsTable = () => {
  const [data, setData] = useState(newApplicantsRows);
  return (
    <div className="newApplicantsTable dataTable">
      <h4 className="headerTitle">Recent Applicants</h4>
      <Box
      sx={{ height: '100%',  width: '100%'}}>
        <DataGrid
        className="recentTable"
          rows={data}
          columns={newApplicantsColumns }
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
      </Box>
    </div>
  )
}

export default NewApplicantsTable
