import { useState } from "react";
 import { v4 as uuidv4 } from 'uuid';
function AddTodo({addTodo}) {
  const [text, setText] = useState("");
  const handleAddTodo = () => {

    if (text !== "") {
        const newTodo = {
            id: uuidv4(),
            text: text,
            isCompleted: false,
        }
        addTodo(newTodo)
        setText("")
    }
  }
  return (
    <div className="add-todo container">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button class="btn btn-outline-secondary" onClick={handleAddTodo} type="button">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
