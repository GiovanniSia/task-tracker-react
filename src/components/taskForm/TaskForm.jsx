import React, { useState } from 'react';
import './TaskForm.css'

const TaskForm = ({handleTaskAdded}) => {
  const [inputText,setInputText] = useState('');

  const handleInputText = (event) => {
    const {value}=event.target;
    setInputText(value);
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if(inputText===''){
      alert('You must write a title for the assignment.');
      return;
    }
    let task = {
      id:"",
      name:inputText,
      isCompleted:false,
    }
    setInputText('');
    return handleTaskAdded(task);
  }


  return (
    <div className='task-form-container'>
      <input 
      type="text" 
      className='task-form-container__input'
      placeholder='Create a new Task'
      value={inputText} 
      onChange={handleInputText}/>
      <button 
      type="submit"
      className='task-form-container__btn'
      onClick={handleAddTask}> + </button>
    </div>
  );
};

export default TaskForm;