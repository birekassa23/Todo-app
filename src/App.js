// src/App.js
import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  // Load todos from localStorage or start with empty list
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new todo (object with subject, topic, task, time)
  const addTodo = (todoData) => {
    const newTodo = {
      id: Date.now(), // unique id
      completed: false, // new todos start incomplete
      ...todoData, // subject, topic, task, time
    };
    setTodos([newTodo, ...todos]); // add new todo at beginning
  };

  // Delete todo by id
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle completion status by id
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      {/* Pass addTodo function to form */}
      <TodoForm addTodo={addTodo} />
      {/* Pass todos and functions to list */}
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
