import React, { useState } from "react";
import { useTodo } from "../../hooks/useTodo";
import Classes from "../../Style/AddTodo.module.css";
import Button from "../Button";
import Container from "../Container";
import Form from "../Form";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState({
    title: "",
    body: "",
  });
  const todos = useTodo();
  const { addTodo } = todos;

  function handelChange(e) {
    setNewTodo((prevState) => {
      const { name, value } = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    const { title, body } = newTodo;
    addTodo(title, body, todos.todo.length + 1);
  }

  return (
    <Container>
      <Form
        handelSubmit={handelSubmit}
        handelChange={handelChange}
        todo={newTodo}
      >
        <Button type="submit" className={Classes.SubmitButton} text="Save" />
      </Form>
    </Container>
  );
}
