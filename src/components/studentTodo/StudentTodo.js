import "./studentTodo.scss";
import { Check, CheckOutlined, Close } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { compareAsc, format } from 'date-fns'

const data = [
  {
    id: uuidv4(),
    task: 'Request for financial support was made.',
    timestamp: 'Jan 27, 2023, 1:57:32 AM',
  },
  {
    id: uuidv4(),
    task: 'Coursework is due for submission.',
    timestamp: 'Feb 27, 2023, 1:57:21 AM',
  },
  {
    id: uuidv4(),
    task: 'Outstanding fee is due for payment.',
    timestamp: 'Mar 27, 2023, 2:07:33 AM',
  },
  {
    id: uuidv4(),
    task: 'Thesis is yet to be submitted.',
    timestamp: 'May 27, 2023, 3:57:42 AM',
  },
  {
    id: uuidv4(),
    task: 'Request for extra time for coursework was made',
    timestamp: 'Jun 27, 2023, 4:56:37 AM',
  },
  {
    id: uuidv4(),
    task: 'Request for change of hostel was made',
    timestamp: 'Nov 27, 2023, 1:57:32 AM',
  },
];

const StudentTodo = ({title}) => {

  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTodo(() => addTodo(todo));
                // OR
    addTodo(todo)
    setTodo('');
  }

  const addTodo = (myTodo) => {
    const newTimestamp = format(new Date(), 'PPpp'); 
    if(myTodo.trim()  !== ""){
      setTasks([...tasks, {id: uuidv4(), task: myTodo, timestamp: newTimestamp}])
    }else{
      alert("Please fill in this field")
    }
  }

  const handleDelete = (id) => {
    let filteredTask = tasks.filter(task => task.id !== id);
    setTasks(filteredTask);
  };

  return (
    <div className='studentTodo'>
      <h4 className="headerTitle">{title}</h4>
      <div className="contentWrapper">
        {tasks.length !==0 ? 
        (tasks.map(todo => (
          <div className="todoContainer" key={todo.id} >
            <div className="contentContainer" key={todo.id} >
              <label htmlFor={todo.id} className="todoLabel">
                <input 
                  id={todo.id} 
                  type="checkbox" 
                  className="todoCheckBox"
                  />
                <span class="checkmark"><CheckOutlined className="checkIcon"/></span>
                <span className="todoTask">{todo.task}</span>
              </label>
                <Close className="closeIcon" onClick={() => handleDelete(todo.id)}/>
            </div>
            <span className="todoTimestamp">{todo.timestamp}</span>
            {/* <span className="todoTime">2 days ago</span> */}
          </div>
        ))) : (<div className="emptyTodo">There is no todo task</div>)}
      </div>
      
      <div className="inputContainer">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Write new task and hit 'Enter'..."
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            required
            
          />
        </form>
      </div>
    </div>
  )
}
export default StudentTodo
