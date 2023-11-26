import React from 'react';
import TaskItem from './taskItem/TaskItem';
import './TaskList.css';


const TaskList = ({tasks,setTasks}) => {
  const handleTaskRemove = (task) => {    
    tasks =  tasks.filter(t => t!==task)
    setTasks([...tasks]);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  return (    
    <div className='task-list-container'>
      <ul className='task-list-items'>
        {tasks.map((task) => (
          <TaskItem
            task={task} handleTaskRemove={handleTaskRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;