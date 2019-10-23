import React, { useState } from "react";
import uuid from "uuid/v4";
import "./NewTodo.scss"

const NewTodo = ({ createTodo }) => {
  const [task, setTask] = useState("");

  const HandleChange = (e) => {
    e.persist();
    setTask({ [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ ...task, id: uuid(),completed: false });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="NewTodoForm">
      <label htmlFor='task'>New Todo</label>
      <input
        type="text"
        placeholder="New Todo"
        id="task"
        name="task"
        onChange={HandleChange}
        value={Object.values(task)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
