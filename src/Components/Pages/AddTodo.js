import React from "react";
import { useNavigate } from "react-router-dom";
import Classes from "../../Style/AddTodo.module.css";
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
        <Button
          type="submit"
          className={Classes.SubmitButton}
          text="Save"
          handelChange={handelclick}
        />
      </Form>
    </Container>
  );
}
