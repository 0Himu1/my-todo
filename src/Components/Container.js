import React from "react";
import classes from "../Style/Container.module.css";

export default function Container({ children }) {
  return (
    <div className={classes.container}>
      <h1>My Todo</h1>
      <div className={classes.todoContainer}>{children}</div>
    </div>
  );
}
