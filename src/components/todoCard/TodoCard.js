import { Check, CheckOutlined, Close } from "@mui/icons-material";
import "./todoCard.scss";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    id: uuidv4(),
    task: 'Post three to six times on Twitter.'
  },
  {
    id: uuidv4(),
    task: 'Post one to two times on Facebook.'
  },
  {
    id: uuidv4(),
    task: 'Post two to three times to Instagram and LinkedIn.'
  },
  {
    id: uuidv4(),
    task: 'Follow back those who follow you'
  },
  {
    id: uuidv4(),
    task: 'Connect with one new person'
  },
];
const TodoCard = ({title}) => {
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

    if(myTodo.trim()  !== ""){
      setTasks([...tasks, {id: uuidv4(), task: myTodo}])
    }else{
      alert("Please fill in this field")
    }


  }

  const handleDelete = (id) => {
    let filteredTask = tasks.filter(task => task.id !== id);
    setTasks(filteredTask);
  };

  return (
    <div className='todoCard'>
      <h4 className="headerTitle">{title}</h4>
      <div className="contentWrapper">
        {tasks.length !==0 ? 
        (tasks.map(todo => (<div className="contentContainer" key={todo.id} >
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
        </div>))) : (<div className="emptyTodo">There is no todo task</div>)}
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

export default TodoCard
