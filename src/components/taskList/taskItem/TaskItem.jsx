import React from 'react';
import './TaskItem.css';

import trashIcon from  '../../../assets/trash.svg';
const TaskItem = ({task}) => {

  return (
    <li className='task'>
      <input type='checkbox' className='input-checkbox'></input>
      <p>{task.name}</p>
      <button><img src={trashIcon} alt="Deleted" /></button>
    </li>
  );
};

export default TaskItem;