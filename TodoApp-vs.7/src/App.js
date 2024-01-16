import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";

import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./Components/store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
