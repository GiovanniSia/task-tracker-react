import React, { useState, useEffect } from 'react';
import TaskForm from '../components/taskForm/TaskForm';
import TaskList from '../components/taskList/TaskList';
import '../App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (task) => {
    tasks.push(task)
    setTasks([...tasks]);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  useEffect(() => {
    //si existen tareas guardadas, se cargan
    if(localStorage.getItem('tasks')!==null){
      let tasksSaved = JSON.parse(localStorage.getItem('tasks'));
      setTasks(tasksSaved)
    }
  }, [])

  return (
    <div className='task-tracker-container'>
      <div className='title-info-container'>
        <h1>Task Tracker</h1>
        <p>Argentina Programa - UTN</p>
      </div>
      <TaskForm handleTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;