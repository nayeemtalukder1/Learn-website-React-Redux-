import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TodoItemsContext } from "./store/todo-items-store";
function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div class="container">
      <div class="row .kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger .kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
