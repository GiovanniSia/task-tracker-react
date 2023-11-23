import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({tasks}) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
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