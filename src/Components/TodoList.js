import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../Style/TodoList.module.css";
import Button from "./Button";
import ListItem from "./ListItem";

export default function TodoList() {
  const NavigateTo = useNavigate();
  function handelclick() {
    NavigateTo("/add");
  }
  return (
    <>
      <ul className={classes.list}>
        <Link to="/update" className={classes.listLink}>
          <ListItem />
        </Link>
        <Link to="/update" className={classes.listLink}>
          <ListItem />
        </Link>
      </ul>
      <Button text="+" className={classes.addBtn} handelChange={handelclick} />
    </>
  );
}
