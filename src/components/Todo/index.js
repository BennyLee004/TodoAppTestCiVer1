import React from "react";
import "./style.css"
function Todo({ todos }) {
  // console.log(todos)
  // const [check, setCheck] = useState('checked');
  // const handleChecked = () => {
  //   setCheck("")
  // }
  return (
    <div className="todo">
      <div className="todo-center">
        <input
          class="form-check-input"
          type="radio"
          id="checkboxNoLabel"
          value="true"
          aria-label="..."
          checked
          // onClick={handleChecked}
          
                  />
      </div>
      <span>{todos.text}</span>
    </div>
  );
}

export default Todo;
