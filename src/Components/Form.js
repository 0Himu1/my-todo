import React from "react";
import Classes from "../Style/Form.module.css";

export default function Form({
  children,
  handelSubmit,
  handelChange,
  todo = {
    title: "",
    body: "",
  },
}) {
  return (
    <form className={Classes.todoForm} onSubmit={handelSubmit}>
      <h2 className={Classes.title}>Name</h2>
      <input
        className={Classes.nameInput}
        type="text"
        placeholder="Enter the name"
        name="title"
        value={todo.title}
        onChange={handelChange}
      />
      <h2 className={Classes.title}>Details</h2>
      <textarea
        className={Classes.detailsInput}
        placeholder="Enter the details"
        name="body"
        value={todo.body}
        onChange={handelChange}
      />
      {children}
    </form>
  );
}
