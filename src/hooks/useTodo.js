import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const { createContext } = require("react");

const todoContext = createContext();

export function useTodo() {
  return useContext(todoContext);
}

export function TodoProvider({ children }) {
  const [todo, setTodo] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const Navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  function addTodo(title, body, id) {
    setTodo((prevTodo) => [
      ...prevTodo,
      { id: id, title: title, body: body, isdone: false },
    ]);
    Navigate("/");
  }

  function updateTodo(id, title, body) {
    setTodo((prevTodo) => {
      const updatedTodo = { id: id, title: title, body: body, isdone: false };
      const newTodos = prevTodo.map((todo) =>
        todo.id === id ? (todo = updatedTodo) : todo
      );
      return newTodos;
    });
    Navigate("/");
  }

  function deleteTodo(id) {
    setTodo((oldTodo) => {
      const NewTodo = oldTodo.filter((todo) => todo.id !== parseFloat(id));
      return NewTodo;
    });
    Navigate("/");
  }

  const value = { todo, addTodo, updateTodo, deleteTodo };

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
}
