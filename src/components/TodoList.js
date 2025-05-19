// src/components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"; // style file we'll create

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <p className="empty-message">📭 No todos yet. Add one above!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
