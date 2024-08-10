// src/App.jsx
import { useState, useEffect, useCallback } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';

function App() {
  // Menggunakan useState untuk mengelola state dari semua tugas
  const [tasks, setTasks] = useState(() => {
    // Mengambil data dari localStorage saat inisialisasi
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Menggunakan useEffect untuk menyimpan tugas di localStorage setiap kali tasks berubah
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Fungsi untuk menambahkan tugas baru
  const addTask = useCallback((taskName) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: taskName, completed: false },
    ]);
  }, []);

  // Fungsi untuk menandai tugas sebagai selesai atau belum selesai
  const toggleComplete = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // Fungsi untuk menghapus tugas
  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      <TaskStats tasks={tasks} />
    </div>
  );
}

export default App;
