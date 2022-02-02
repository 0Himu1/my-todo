import React from "react";
import Checkbox from "../Images/CheckBoxRound.svg";
import classes from "../Style/ListItem.module.css";

export default function ListItem() {
  return (
    <div className={classes.listItem}>
      <img src={Checkbox} alt="" />
      <div className={classes.text}>
        <h3>Wash My Cloth</h3>
        <p>Shirt, Pant, Hat</p>
      </div>
    </div>
  );
}
