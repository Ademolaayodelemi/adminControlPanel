import "./newApplicants.scss";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import { DeleteOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { rows } from "../../dummyData"

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 160,
    // editable: true,
    renderCell: params => {
      return (
        <div className="imgFirstname">
          <Avatar src="/broken-image.jpg" />
          <div>{params.row.firstName}</div>
        </div>
      )
    }
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 130,
    // editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    // type: 'number',
    width: 60,
    // editable: true,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 90,
    // editable: true,
  },
  {
    field: 'course',
    headerName: 'Course',
    width: 180,
    // editable: true,
  },
  {
    field: 'fee',
    headerName: 'Fee',
    width: 100,
    // editable: true,
  },
  {
    field: 'score',
    headerName: 'Score',
    // type: 'number',
    width: 90,
    // editable: true,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 110,
    // editable: true,
  },
  {
    field: 'level',
    headerName: 'Level',
    // type: 'number',
    width: 80,
    // editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    // editable: true,
  },
  {
    field: 'decision',
    headerName: 'Decision',
    width: 120,
    // editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 210,
    // editable: true,
    renderCell: params => {
      return (
        <div className="actionContainer">
          <button className="viewButton">
            <VisibilityOutlined/>
            <span>view</span>
          </button>
          <DeleteOutlined className="appDeleteIcon"/>
        </div>
      )
    }
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];



const NewApplicants = ({title}) => {
  const [data, setData] = useState(rows)
  return (
    <div className="newApplicants">
      <h4 className="headerTitle">{title}</h4>
      <Box 
      sx={{ 
          height: '100%', 
          width: '100%', 
        
      }}>
        {/* <div className="recentTable"> */}

        <DataGrid
        className="recentTable"
          rows={data}
          columns={columns }
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
      </Box>
      
    </div>
  )
}

export default NewApplicants
