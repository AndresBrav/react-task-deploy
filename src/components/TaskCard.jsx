import React from "react";
import TaskContext from "../context/TaskContext";

const TaskCard = ({ task, deleteTask }) => {
  return (
    <TaskContext>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Eliminar Tarea
        </button>
      </div>
    </TaskContext>
  );
};

export default TaskCard;
