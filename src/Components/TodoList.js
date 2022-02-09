import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTodo } from "../hooks/useTodo";
import classes from "../Style/TodoList.module.css";
import Button from "./Button";
import ListItem from "./ListItem";

export default function TodoList() {
  const todos = useTodo();
  const { todo } = todos;

  const Navigate = useNavigate();
  function handelclick() {
    Navigate("/add");
  }
  // bug on edit

  return (
    <>
      <ul className={classes.list}>
        {todo &&
          todo.map((item) => (
            <Link
              to={`/update/${item.id}`}
              className={classes.listLink}
              key={item.id}
              id={item.id}
            >
              <ListItem title={item.title} body={item.body} />
            </Link>
          ))}
      </ul>
      <Button text="+" className={classes.addBtn} handelChange={handelclick} />
    </>
  );
}
