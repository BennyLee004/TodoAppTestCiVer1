import React from "react";
import Todo from "../Todo";
import "./style.css";

function TodoList({ dataTodo, handleChecked, handleDeleteTodo }) {
  return (
    <div className="todo-list container">
      {dataTodo.map((todos) => (
        <Todo todos={todos} handleChecked={handleChecked} handleDeleteTodo={handleDeleteTodo}/>
      ))}
    </div>
  );
}

export default TodoList;
