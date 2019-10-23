import React, { useState } from "react";
import Todo from "../todo/todo";
import NewTodo from "../NewTodoForm/NewTodoForm";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./todolist.scss";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const Create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const Update = (id, updateTask) => {
    const UpdatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    setTodos(UpdatedTodos);
  };
  const Remove = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  const toggleCompletion = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const todosList = todos.map(({ id, task, completed }) => {
    return (
      <CSSTransition key={id} timeout={500} classNames="todo">
        <Todo
          key={id}
          id={id}
          task={task}
          updateTodo={Update}
          removeTodo={Remove}
          toggleTodo={toggleCompletion}
          completed={completed}
        />
      </CSSTransition>
    );
  });
  return (
    <div className="todoList">
    <h1>Manage Your Day<span>Todo App</span></h1>
    <ul>
    <TransitionGroup className="todo-list">{todosList}</TransitionGroup>
  </ul>
      <NewTodo createTodo={Create} />
  
    </div>
  );
};

export default ToDoList;
