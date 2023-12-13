import { useState } from "react";
import "./searchPage.scss";
import {v4 as uuidv4 } from "uuid";

const SearchPage = () => {

  const [search, setSearch] = useState({});
  const handlChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSearch(prevValues => ({...prevValues, [name]:value}));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch( savedData => ([...savedData, {id:uuidv4(), ...search}]) )
     setSearch({ 
      // id: uuidv4(),
      hostelName: "", 
      roomNo: '',
      roomType: '',
      noOfBeds: '',
      cost: '',
    },);
    };
  return (
    <div className='searchPage'>
      <h4>Search Student</h4>
      <form onSubmit={handleSubmit} className="searchForm">
        <div className="SearcInputContainer">
          <div className="inputWrap">
            <label className="inputLabel">Student Number</label>
            <input 
              type="text" 
              name="studentNo"
              value={search.studentNo} 
              onChange={handlChange}
              placeholder="Search by Student No"
              required 
            />
          </div>
          <div className="inputWrap">
            <label className="inputLabel">Student Name</label>
            <input 
              type="text" 
              name="studentName"
              value={search.studentName} 
              onChange={handlChange}
              placeholder="Search by Name"
              required 
            />
          </div>
          <div className="inputWrap">
            <label className="inputLabel">Student Email</label>
            <input 
              type="email" 
              name="email"
              value={search.email} 
              onChange={handlChange}
              placeholder="Search by Email"
              required 
            />
          </div>
          <div className="inputWrap">
            <label className="inputLabel">Date of Birth</label>
            <input 
              type="text" 
              name="dob"
              value={search.dob} 
              onChange={handlChange}
              placeholder="Search by Date"
              required 
            />
          </div>
        </div>
        <div className="buttoncontainer">
            <button type="submit">Add</button>
            <button type="reset" value="Reset">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default SearchPage
