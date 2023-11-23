import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([{
    id:"",
    name:"",
    isCompleted:false,
  }]);

  return (
    <div>
      <h1>Aplicación de Lista de Tareas</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;