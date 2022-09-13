import React from "react";
import { useState } from "react";

function Form({ todos, setTodos}) {
  const [form, setForm] = useState("");
  const onChangeForm = (e) => {
    setForm(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();

    if (form === "") {
      alert("Please add a todo");
      return false;
    }
    setTodos([
      ...todos,
      { title: form, completed: false, id: todos.at(-1).id + 1 },
    ]);
    console.log(todos);
    setForm("");
  };
  return (
    <div className="header">
      <form onSubmit={onSubmitForm}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={onChangeForm}
        />
      </form>
    </div>
  );
}

export default Form;
