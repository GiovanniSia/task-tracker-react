import React from 'react';
import TaskItem from './taskItem/TaskItem';
import './TaskList.css';

const TaskList = ({tasks}) => {
  return (
    <div className='task-list-container'>
      <ul className='task-list-items'>
        {tasks.map((task) => (
          <TaskItem
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;