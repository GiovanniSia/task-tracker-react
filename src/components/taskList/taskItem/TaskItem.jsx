import React, { useState } from 'react';
import './TaskItem.css';
import trashIcon from  '../../../assets/trash.svg';

const TaskItem = ({task, handleTaskRemove, handleTaskChecked}) => {
  const [isChecked, setIsChecked] = useState(task.isCompleted);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    return handleTaskChecked(task.id);
  };

  return (
    <li className='task'>
      <input 
        type='checkbox' 
        className='input-checkbox'
        onChange={handleCheckboxChange}
        checked={isChecked}
        ></input>
      <p className={`text ${isChecked ? 'checked':''}`}>{task.name}</p>
      <button onClick={() => handleTaskRemove(task)}><img src={trashIcon} alt="Deleted" /></button>
    </li>
  );
};

export default TaskItem;