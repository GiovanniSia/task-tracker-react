
const TaskItem = ({task}) => {

  return (
    <li>
      {task.name}
      <button>Completar</button>
      <button>Eliminar</button>
    </li>
  );
};

export default TaskItem;