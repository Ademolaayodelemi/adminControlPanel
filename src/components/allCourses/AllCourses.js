import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";
import "./allCourses.scss";
import {v4 as uuidv4 } from "uuid";
// import DataTable from "../dataTable/DataTable";
import { allCoursesDataColumns, allCoursesDataRows } from "../../tableData";
import { DeleteOutlined, EditCalendarOutlined, VisibilityOutlined } from "@mui/icons-material";


const AllCourses = () => {
  // ??: This is the nullish coalescing operator. It returns the right-hand operand when the left-hand operand is null or 
  // undefined, and in this case, it provides a fallback value if the left-hand side is null or undefined.
  // allCoursesListRows: This is the fallback value. If the value retrieved from
  // local storage is null or undefined, the state will be initialized with allCoursesListRows.
  // At first, (before the first storage), there will be no data in localstorage, there, state will be initialized with allCoursesListRows.
  
  // const [allCoursesRows, setAllCoursesRows] = useState(JSON.parse(localStorage.getItem('STORAGE_ID')) ?? allCoursesDataRows);
  //   useEffect(()=>{
    //     localStorage.setItem('STORAGE_ID', JSON.stringify(allCoursesRows))
    //   }, [allCoursesRows]);
    
    
    
  const [allCourses, setallCourses] = useState({});
  const [allCoursesRows, setAllCoursesRows] = useState(allCoursesDataRows);
  const handlChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setallCourses(prevValues => ({...prevValues, [name]:value}));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllCoursesRows( savedData => ([...savedData, {id:uuidv4(), ...allCourses}]) )
    setallCourses({ 
      // id: uuidv4(),
      allCoursesName: "", 
      roomNo: '',
      roomType: '',
      noOfBeds: '',
      cost: '',
    },);
  };
  
  const handleDelete = (id) => {
    const newData = allCoursesRows.filter( allCoursesRow => allCoursesRow.id !== id );
    setAllCoursesRows(newData);
  };
  
    
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
            <div className="allCoursesActionIcons">
              <VisibilityOutlined className="allCoursesView"/>
              <EditCalendarOutlined  className="allCoursesEdit"/>
              <DeleteOutlined onClick={ ()=> handleDelete(params.row.id) } className="allCoursesDelete"/>
            </div>
          )
        }
    },
    ];

  return (
    <div className='allCourses'>
      {/* <h1>allCourses</h1> */}
      <div className="allCoursesLeft">
        <h4 className="headerTitle2">Add New Room</h4>
        <form onSubmit={handleSubmit} className="allCoursesForm">
          <label className="inputLabel">Course Code</label>
          <input 
            type="text" 
            name="courseCode"
            value={allCourses.courseCode} 
            onChange={handlChange}
            required 
          />
          <label className="inputLabel">Course Title</label>
          <input 
            type="text" 
            name="courseTitle"
            value={allCourses.courseTitle} 
            onChange={handlChange}
            required 
          />
          <label className="inputLabel">Faculty</label>
          <select name="faculty" value={allCourses.faculty} onChange={handlChange} required   >
            <option value="">Select Faculty</option>
            <option value="sci&Eng">Science & Engineering</option>
            <option value="med">Medicine</option>
            <option value="finance">Finance</option>
          </select>
          <label className="inputLabel">Department</label>
          <select name="department" value={allCourses.department} onChange={handlChange} required   >
            <option value="">Select Department</option>
            <option value="compSci">Computer Science</option>
            <option value="nursing">Nursing</option>
            <option value="eco">Economics</option>
          </select>
          <label className="inputLabel">Level</label>
          <select name="level" value={allCourses.level} onChange={handlChange} required   >
            <option value="">Select Level</option>
            <option value="postGrad">Postgraduate</option>
            <option value="undergrad">Undergraduate</option>
          </select>

          <div className="buttoncontainer">
            <button type="submit">Add</button>
            <button type="reset" value="Reset">Reset</button>
          </div>
        </form>
      </div>
      <div className="allCoursesRight">
        <div className="dataTable">
          <h4 className="headerTitle">All Courses List</h4>
          <Box
          sx={{ height: '100%',  width: '100%'}}>
            <DataGrid
            className="recentTable"
              rows={allCoursesRows}
              columns={allCoursesDataColumns.concat(actionColumn)} // we use the JavaScript array method ".concat()" to add the "actionColumn"
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

export default AllCourses
