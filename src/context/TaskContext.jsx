import React from "react";

const TaskContext = (props) => {
  return (
    <>
      <h1>Componente Context</h1>
      {props.children} {/* aqui se genera todo el codigo */}
    </>
  );
};

export default TaskContext;
