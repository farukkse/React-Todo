import React from "react";

function Footer({ todos, setTodos, status, setStatus }) {
  const unCompleted = todos.filter((todo) => todo.completed === false);
  const completed = todos.filter((todo) => todo.completed === true);
  const clearCompleted = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.completed === false));
  };
  const click = (e) => {
    setStatus(e.target.id);
  };
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length}</strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <label
            onClick={click}
            className={status === "alt" ? "selected" : ""}
            id="all"
          >
            All
          </label>
        </li>
        <li>
          <label
            onClick={click}
            className={status === "active" ? "selected" : ""}
            id="active"
          >
            Active
          </label>
        </li>
        <li>
          {" "}
          <label
            onClick={click}
            className={status === "completed" ? "selected" : ""}
            id="completed"
          >
            Completed
          </label>
        </li>
      </ul>
      <button
        className={completed === 0 ? "hidden" : "clear-completed"}
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default Footer;
