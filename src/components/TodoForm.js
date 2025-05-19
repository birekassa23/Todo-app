// src/components/TodoForm.js
import React, { useState } from "react";
import "./TodoForm.css"; // we’ll create this CSS file

function TodoForm({ addTodo }) {
  // create state for each input field
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  // when user clicks "Add"
  const handleSubmit = (e) => {
    e.preventDefault();

    // make sure no field is empty
    if (!subject.trim() || !topic.trim() || !task.trim() || !time.trim())
      return;

    // send todo object to parent (App.js)
    addTodo({ subject, topic, task, time });

    // clear all input fields
    setSubject("");
    setTopic("");
    setTask("");
    setTime("");
  };

  // clear form fields only
  const handleClear = () => {
    setSubject("");
    setTopic("");
    setTask("");
    setTime("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <textarea
        placeholder="What to do?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        rows="3"
      />
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <div className="form-buttons">
        <button type="submit">➕ Add</button>
        <button type="button" onClick={handleClear} className="clear-btn">
          🧹 Clear
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
