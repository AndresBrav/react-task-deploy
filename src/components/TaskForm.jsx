import { useState,useContext} from "react";
import {TaskContext} from "../context/TaskContext";


const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext) /* trae la funcion aqui */
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({ title, description }); /* llamamos al metodo de App.jsx */
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tareas "
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus /* para que enfoque */
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      
      ></textarea>
      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
