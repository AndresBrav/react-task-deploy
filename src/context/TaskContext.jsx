import { createContext, useState,useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

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
    const arreglonuevo = tasks.filter((task) => task.id !== taskId);
    setTasks(arreglonuevo);
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
