import React from "react";
import { useNavigate } from "react-router-dom";
import Classes from "../../Style/UpdateTodo.module.css";
import Button from "../Button";
import Container from "../Container";
import Form from "../Form";

export default function AddTodo() {
  const NavigateTo = useNavigate();
  function handelclick() {
    NavigateTo("/");
  }
  return (
    <Container>
      <Form>
        <div className={Classes.btnContainer}>
          <Button
            type="submit"
            text="Save"
            className={Classes.SubmitButton}
            handelChange={handelclick}
          />
          <Button type="button" text="Delete" className={Classes.deleteBtn} />
        </div>
      </Form>
    </Container>
  );
}
