import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      <TodoItem todoName="Buy Milk" todoDate="4/10/2023" />
      <TodoItem todoName="Go to collage" todoDate="4/10/2023" />
    </div>
  );
};
export default TodoItems;
