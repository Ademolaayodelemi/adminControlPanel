import "./examResultsTable.scss"
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { examResultsColumns, examResultsRows } from "../../tableData";

const ExamResultsTable = () => {
  const [data, setData] = useState(examResultsRows);
  return (
    <div className="examResultsTable dataTable">
      <h4 className="headerTitle">Exam Results</h4>
      <Box
      sx={{ height: '100%',  width: '100%'}}>
        <DataGrid
        className="recentTable"
          rows={data}
          columns={examResultsColumns }
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

export default ExamResultsTable
