import React, { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      {todos.length >= 1 ? <TodoList todos={todos} setTodos={setTodos} /> : ""}
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
