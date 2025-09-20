import React from "react";
/**
 * 1. Delete button
 * 2. Complete button
 * 3. Todo description
 */

const TodoCard = ({
  todo: { id, task, isComplete },
  handleDeleteTodo,
  handleComplete,
}) => {
  return (
    <>
      <div>TodoCard</div>
      <button onClick={() => handleComplete(id)}>
        {isComplete ? "Complete" : "Uncomplete"}
      </button>
      <button onClick={() => handleDeleteTodo(id)}>Delete</button>
      <p>{isComplete ? <s>{task}</s> : task}</p>
    </>
  );
};

export default TodoCard;
