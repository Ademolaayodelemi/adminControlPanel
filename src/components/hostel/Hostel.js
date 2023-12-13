import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";
import "./hostel.scss";
import {v4 as uuidv4 } from "uuid";
// import DataTable from "../dataTable/DataTable";
import { hostelListColumns, hostelListRows } from "../../tableData";
import { DeleteOutlined, EditCalendarOutlined, VisibilityOutlined } from "@mui/icons-material";


const Hostel = () => {
  // const [hostelRows, setHostelRows] = useState(hostelListRows);
  const [hostel, setHostel] = useState({});
  // ??: This is the nullish coalescing operator. It returns the right-hand operand when the left-hand operand is null or 
  // undefined, and in this case, it provides a fallback value if the left-hand side is null or undefined.
  // hostelListRows: This is the fallback value. If the value retrieved from
  // local storage is null or undefined, the state will be initialized with hostelListRows.
  // At first, (before the first storage), there will be no data in localstorage, there, state will be initialized with hostelListRows.
  const [hostelRows, setHostelRows] = useState(JSON.parse(localStorage.getItem('MY_STORAGE_ID')) ?? hostelListRows);
  
  const handlChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setHostel(prevValues => ({...prevValues, [name]:value}));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
     setHostelRows( savedData => ([...savedData, {id:uuidv4(), ...hostel}]) )
     setHostel({ 
      // id: uuidv4(),
      hostelName: "", 
      roomNo: '',
      roomType: '',
      noOfBeds: '',
      cost: '',
    },);
    };

    const handleDelete = (id) => {
      const newData = hostelRows.filter( hostelRow => hostelRow.id !== id );
      setHostelRows(newData);
    };
    
    useEffect(()=>{
      localStorage.setItem('MY_STORAGE_ID', JSON.stringify(hostelRows))
    }, [hostelRows]);
    
    const actionColumn = [
       //Here the "field" ("action") are declared before use.
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
            <div className="hostelActionIcons">
              <VisibilityOutlined className="hostelView"/>
              <EditCalendarOutlined  className="hostelEdit"/>
              <DeleteOutlined onClick={ ()=> handleDelete(params.row.id) } className="hostelDelete"/>
            </div>
          )
        }
    },
    ];

  return (
    <div className='hostel'>
      {/* <h1>Hostel</h1> */}
      <div className="hostelLeft">
        <h4 className="headerTitle2">Add New Room</h4>
        <form onSubmit={handleSubmit} className="hostelForm">
          <label className="inputLabel">Hostel Name</label>
          <input 
            type="text" 
            name="hostelName"
            value={hostel.hostelName} 
            onChange={handlChange}
            required 
          />
          <label className="inputLabel">Room Number</label>
          <input 
            type="text" 
            name="roomNo"
            value={hostel.roomNo} 
            onChange={handlChange}
            required 
          />
          <label className="inputLabel">Room Type</label>
          <select name="roomType" value={hostel.roomType} onChange={handlChange} required   >
            <option value="">Select Room Type</option>
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
          </select>
          <label className="inputLabel">Number of Bed</label>
          <input 
            type="text" 
            name="noOfBeds"
            value={hostel.noOfBeds} 
            onChange={handlChange}
            required 
          />
          <label className="inputLabel">Cost per Bed</label>
          <input 
            type="text" 
            name="cost"
            value={hostel.cost} 
            onChange={handlChange}
            placeholder="£" 
            required 
          />

          <div className="buttoncontainer">
            <button type="submit">Add</button>
            <button type="reset" value="Reset">Reset</button>
          </div>
        </form>
      </div>
      <div className="hostelRight">
        <div className="dataTable">
          <h4 className="headerTitle">Hostel List</h4>
          <Box
          sx={{ height: '100%',  width: '100%'}}>
            <DataGrid
            className="recentTable"
              rows={hostelRows}
              columns={hostelListColumns.concat(actionColumn)} // we use the JavaScript array method ".concat()" to add the "actionColumn"
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
    </div>
      
    </div>
  )
}

export default Hostel
