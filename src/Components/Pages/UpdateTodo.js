/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTodo } from "../../hooks/useTodo";
import Classes from "../../Style/UpdateTodo.module.css";
import Button from "../Button";
import Container from "../Container";
import Form from "../Form";

export default function UpdateTodo() {
  const { todo, updateTodo, deleteTodo } = useTodo();
  const { id } = useParams();
  const currentTodo = todo.filter((todoItem) => todoItem.id === parseFloat(id));
  const [updatedTodo, setupdatedTodo] = useState(currentTodo[0]);

  function handelChange(e) {
    setupdatedTodo((prevState) => {
      const { name, value } = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handelSubmit(e) {
    e.preventDefault();
    const { id, title, body } = updatedTodo;
    updateTodo(id, title, body);
  }

  function handelDelete() {
    deleteTodo(id);
  }

  return (
    <Container>
      <Form
        handelSubmit={handelSubmit}
        todo={updatedTodo}
        handelChange={handelChange}
      >
        <div className={Classes.btnContainer}>
          <Button type="submit" text="Save" className={Classes.SubmitButton} />
          <Button
            type="button"
            text="Delete"
            className={Classes.deleteBtn}
            handelChange={handelDelete}
          />
        </div>
      </Form>
    </Container>
  );
}
