import React, { useState } from "react";
import TodoCard from "./todoCard";
/**
 * 1. Input field to write down new todo
 * 2. Button submit / create todo
 * 3. Component to display all created todos
 * 4. Todos
 *      - Check off button
 *      - Delete button
 *
 */

const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, task: "task1", isComplete: false },
    { id: 2, task: "task2", isComplete: false },
  ]);

  const saveTodos = () => {
    setTodos([...todos, inputValue]);
  };

  // logic - if the current todo where we click delete
  // if any todo in our current todos DOESN'T equal to the same id
  const handleDeleteTodo = (target) => {
    const updatedTodos = todos.filter((todo) => todo.id !== target);
    setTodos(updatedTodos);
  };

  const handleComplete = (target) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === target) {
        return { id: todo.id, task: todo.task, isComplete: !todo.isComplete };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div>Todo</div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="type in your task"
        value={inputValue}
      />
      <button onClick={saveTodos}>Create Task</button>
      {todos.map((todo) => (
        <TodoCard
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleComplete={handleComplete}
        />
      ))}
    </>
  );
};

export default Todo;
