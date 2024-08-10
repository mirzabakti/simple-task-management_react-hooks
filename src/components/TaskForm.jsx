// src/components/TaskForm.jsx
import { useState, useRef } from 'react';

function TaskForm({ addTask }) {
  // Menggunakan useState untuk mengelola state dari input task
  const [task, setTask] = useState('');

  // useRef untuk fokus pada input setelah task ditambahkan
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);  // Memanggil fungsi addTask dari props
      setTask('');  // Reset input
      inputRef.current.focus();  // Fokus kembali ke input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        ref={inputRef}
        placeholder="Add new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
