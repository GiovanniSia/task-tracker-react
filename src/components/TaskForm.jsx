import React, { useState } from 'react';

const TaskForm = () => {

  return (
    <form>
      <label>Nueva Tarea:</label>
      <input type="text"/>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;