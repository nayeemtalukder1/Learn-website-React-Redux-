import { useRef } from "react";
import { MdOutlineAddToQueue } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName} ${dueDate}`);
    onNewItem(todoName, dueDate);
  };
  return (
    <div class="container">
      <form class="row .kg-row" onSubmit={handleAddButtonClicked}>
        <div class="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
          />
        </div>
        <div class="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div class="col-2">
          <button type="submit" class="btn btn-success .kg-button">
            <MdOutlineAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
