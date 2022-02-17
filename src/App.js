import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Components/Container";
import AddTodo from "./Components/Pages/AddTodo";
import Home from "./Components/Pages/Home";
import UpdateTodo from "./Components/Pages/UpdateTodo";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<UpdateTodo />} />
          <Route path="/add" element={<AddTodo />} />
        </Routes>
      </Container>
    </div>
  );
}
// 
export default App;
