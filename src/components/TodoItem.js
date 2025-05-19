// src/components/TodoItem.js
import React from "react";
import "./TodoItem.css"; // custom styles

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-header">
        <small>{todo.topic}</small>
      </div>

      <p className="todo-task">{todo.task}</p>

      <div className="todo-footer">
        <small className="todo-time">
          🕒 {new Date(todo.time).toLocaleString()}
        </small>
        <div className="todo-actions">
          <button onClick={() => toggleTodo(todo.id)} className="toggle-btn">
            {todo.completed ? "Undo" : "✔ Done"}
          </button>
          <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
            🗑 Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
