import AddTodo from "../AddTodo";
import "./style.css";
import Todo from "../Todo";
import TodoList from "../TodoList";
import { DATATODO } from "../Data/data";
import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
function TodoPages() {
  const [dataTodo, setDataTodo] = useLocalStorage("dataTodo", DATATODO);
  const [filterTodo, setFilterTodo] = useState(dataTodo);
  const addTodo = (todo) => {
    setDataTodo((todos) => [...todos, todo]);
  };

  useEffect(() => {
    console.log("dataTodo at Localstorage :>> ", dataTodo);
  }, [dataTodo]);
  useEffect(() => {
    setFilterTodo(dataTodo);
  }, [dataTodo]);
  const handleFilterByStatus = (status) => {
    let filteredList;
    if (status === "active") {
      console.log(status)
      filteredList = dataTodo.filter((todo) => todo.isCompleted === false);
      
    } else if (status === "completed") {
      console.log(status)
      filteredList = dataTodo.filter((todo) => todo.isCompleted === true);
    } else {
      filteredList = dataTodo;
    }
    setFilterTodo(filteredList);
  };
  console.log()
  return (
    <div className="todo-page container">
      <h2>#todo</h2>
      <ul className="filter-todo">
        <li onClick={() => handleFilterByStatus("all")}>All</li>
        <li onClick={() => handleFilterByStatus("active")}>Active</li>
        <li onClick={() => handleFilterByStatus("completed")}>Completed</li>
      </ul>
      <AddTodo addTodo={addTodo} />
      <TodoList dataTodo={filterTodo}  />
    </div>
  );
}

export default TodoPages;
