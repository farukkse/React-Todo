import React, { useEffect } from "react";
import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import List from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      completed: true,
      title: "Learn Js",
    },
    {
      id: 2,
      completed: false,
      title: "Learn py",
    },
    {
      id: 3,
      completed: false,
      title: "Learn c#",
    },
  ]);
  const [status, setStatus] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFiltered(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFiltered(todos.filter((todo) => todo.completed === false));

        default:
          setFiltered(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);
  return (
    <div className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <Form todos={todos} setTodos={setTodos} />
      </header>
      <div className="main">
        <ul className="todo-list">
          {filtered.map((todo) => {
            return (
              <List
                status={status}
                key={todo.id}
                todo={todo}
                title={todo.title}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })}
        </ul>
      </div>
      <div className="footer">
        <Footer
          status={status}
          setStatus={setStatus}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default Todo;
