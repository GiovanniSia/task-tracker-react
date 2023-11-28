import React from 'react';
import TaskItem from './taskItem/TaskItem';
import './TaskList.css';


const TaskList = ({tasks,setTasks}) => {

  const handleTaskRemove = (task) => {    
    tasks =  tasks.filter(t => t!==task)
    setTasks([...tasks]);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  const handleTaskChecked = (id) => {
    tasks.forEach( t => {
      if(t.id===id){
        t.isCompleted = !t.isCompleted;
      } 
    })
    setTasks([...tasks]);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  return (    
    <div className='task-list-container'>
      <ul className='task-list-items'>
        {tasks.map((task,index) => (
          <TaskItem
            key={index} task={task} handleTaskRemove={handleTaskRemove} handleTaskChecked={handleTaskChecked}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;