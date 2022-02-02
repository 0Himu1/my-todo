import React from "react";
import Classes from "../Style/Form.module.css";

export default function Form({ children }) {
  return (
    <form className={Classes.todoForm}>
      <h2 className={Classes.title}>Name</h2>
      <input
        className={Classes.nameInput}
        type="text"
        placeholder="Enter the name"
      />
      <h2 className={Classes.title}>Details</h2>
      <textarea
        className={Classes.detailsInput}
        placeholder="Enter the details"
      />
      {children}
    </form>
  );
}
