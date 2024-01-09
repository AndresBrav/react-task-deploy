import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
export const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
    console.log(data);
  }, []);

  function createTask(task) {
    /* ...tasks  copia todo el arreglo  task  le asigna el valor */
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  /* taskId viene de TaskCard  */
  const deleteTask = (taskId) => {
    const arreglonuevo = tasks.filter((task) => (task.id !== taskId));
    setTasks(arreglonuevo);
  };

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};
