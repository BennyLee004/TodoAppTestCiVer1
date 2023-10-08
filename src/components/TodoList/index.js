import React from "react";
import Todo from "../Todo";
import "./style.css";

function TodoList({ dataTodo }) {
  return (
    <div className="todo-list container">
      {dataTodo.map((todos) => (
        <Todo todos={todos}  />
      ))}
    </div>
  );
}

export default TodoList;
