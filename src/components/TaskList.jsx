import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        // eslint-disable-next-line react/jsx-key
        <TaskCard key={task.id} task={task}  />
      ))}
    </div>
  );
};

export default TaskList;
