"use client";

import { useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");

  const addTask = async () => {
    if (!title) return;

    await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
    });

    alert("Task added");
    setTitle("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Task</h1>

      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <button onClick={addTask}>Add Task</button>

      <br /><br />

      <a href="/">Go Back</a>
    </div>
  );
}
