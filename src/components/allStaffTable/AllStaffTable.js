import { useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";
import "./allStaffTable.scss";
import {v4 as uuidv4 } from "uuid";
import { allStaffDataColumns, allStaffDataRows } from "../../tableData"; 
import { DeleteOutlined, EditCalendarOutlined, VisibilityOutlined } from "@mui/icons-material";

const AllStaffTable = () => {

  const [allStaffRows, setallStaffRows] = useState(allStaffDataRows);

    const handleDelete = (id) => {
      // const newData = hostelRows.filter( hostelRow => hostelRow.id !== id );
      // setHostelRows(newData);
    };
    
    const actionColumn = [
      // Here the "field" ("action") are declared before use.
      // The data that will be diplayed under "field" (id) is generated from "userRows" in the "tableData".
      // Note: if the headerName property is not declared, the field value (e.g "action" etc.) will be used as the header name.
      // I decided to move the action column from the tableData to this place so that it can have access to some properties like the 'handleDelete'

      { 
        field: "action", 
        headerName: "Action", 
        room: 204,
        flex: 1,
        // minWidth: , 
        // maxWidth: , 
        renderCell: params => {
          return (
            <div className="allStaffActionIcons">
              <VisibilityOutlined className="allStaffView"/>
              <EditCalendarOutlined  className="allStaffEdit"/>
              <DeleteOutlined onClick={ () => handleDelete(params.row.id) } className="allStaffDelete"/>
            </div>
          )
        }
      },
    ];

  return (
        <div className="allStaff">
          <h4 className="headerTitle">All Staff</h4>
          <Box
          sx={{ height: '100%',  width: '100%'}}>
            <DataGrid
            className="recentTable"
              rows={allStaffRows}
              columns={allStaffDataColumns.concat(actionColumn)} // we use the JavaScript array method ".concat()" to add the "actionColumn"
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

export default AllStaffTable
