import { useState } from "react";
import "./style.css";
import * as Icon from "react-feather";

function Todo({ todos, handleChecked, handleDeleteTodo }) {
  return (
    <div className="todo">
      <div className="todo-center">
        {todos.isCompleted ? (
          <Icon.CheckCircle size={18} onClick={() => handleChecked(todos.id)} />
        ) : (
          <Icon.Circle size={18} onClick={() => handleChecked(todos.id)} />
        )}
      <span>{todos.text}</span>
      </div>
      <div className="trash">
        <Icon.Trash size={18} onClick={() => handleDeleteTodo(todos.id)} />
      </div>
    </div>
  );
}

export default Todo;
