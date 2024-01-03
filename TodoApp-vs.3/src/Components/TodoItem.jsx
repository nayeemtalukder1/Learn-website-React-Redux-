function TodoItem({ todoName, todoDate, onDeleteClick }) {
  // { todoName , todoDate } destructue object
  // let { todoName , todoDate } = props;
  // let todoName = props.todoName
  // let todoDate = props.todoDate
  return (
    <div className="container">
      <div className="row .kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            class="btn btn-danger .kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
