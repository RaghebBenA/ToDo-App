import React, { useState } from "react";
import "./todo.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Todo = ({ task, id, updateTodo, removeTodo, toggleTodo, completed }) => {
  const [isEditing, setEditing] = useState(false);
  const [tasks, setTask] = useState(task);

  const toggleForm = () => {
    setEditing(!isEditing);
  };
  const HandleChange = (e) => {
    e.persist();
    setTask(e.target.value);
  };
  const handleRemove = () => {
    removeTodo(id);
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    updateTodo(id, tasks);
    setEditing(!isEditing);
  };
  const handleToggle = () => {
    toggleTodo(id);
  };

  const result = () => {
    if (isEditing) {
      return (
        <CSSTransition key="editing" timeout={500} classNames="form">
          <form className="Todo-edit-form" onSubmit={handleUpdate}>
            <input
              type="text"
              name="task"
              onChange={HandleChange}
              value={tasks}
            />
            <button type="submit">Save</button>
          </form>
        </CSSTransition>
      );
    } else {
      return (
        <CSSTransition key="normal" timeout={500} classNames="task-text">
          <li onClick={handleToggle} className="Todo-task">
            {task}
          </li>
        </CSSTransition>
      );
    }
  };

  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      {result()}
      <div className="Todo-buttons">
        <button onClick={toggleForm}>
          <i class="fas fa-pen" />
        </button>
        <button onClick={handleRemove}>
          <i class="fas fa-trash" />
        </button>
      </div>
    </TransitionGroup>
  );
};

export default Todo;
