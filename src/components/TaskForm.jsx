import { useState } from "react";

const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
