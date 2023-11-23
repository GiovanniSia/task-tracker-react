import React, { useState, useEffect } from 'react';
import TaskForm from '../components/taskForm/TaskForm';
import TaskList from '../components/TaskList';
import '../App.css';

const App = () => {
  const [tasks, setTasks] = useState([{
    id:"",
    name:"",
    isCompleted:false,
  }]);

  const handleTaskAdded = (task) =>{
    setTasks(tasks.push(task));
  }

  return (
    <div className='taskList-container'>
      <h1>Task Tracker</h1>
      <TaskForm handleTaskAdded={handleTaskAdded}/>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;