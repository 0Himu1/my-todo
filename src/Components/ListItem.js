import React from "react";
import Checkbox from "../Images/CheckBoxRound.svg";
import classes from "../Style/ListItem.module.css";

export default function ListItem({title, body}) {
  return (
    <div className={classes.listItem}>
      <img src={Checkbox} alt="" />
      <div className={classes.text}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
