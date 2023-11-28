import React, { useState } from 'react';
import './TaskForm.css'

const TaskForm = ({handleTaskAdded}) => {
  const [inputText,setInputText] = useState('');

  const handleInputText = (event) => {
    const {value}=event.target;
    setInputText(value);
  }

  const getLastId = ()=>{
    let tasksSaved = JSON.parse(localStorage.getItem('tasks'));
    if(tasksSaved!==null && tasksSaved.length>0){
      return tasksSaved[tasksSaved.length-1].id;
    }else{
      return 0;
    }
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if(inputText===''){
      alert('You must write a title for the assignment.');
      return;
    }
    let task = {
      id:getLastId()+1,
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