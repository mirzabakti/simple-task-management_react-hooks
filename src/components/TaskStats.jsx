// src/components/TaskStats.jsx
import { useMemo } from 'react';

function TaskStats({ tasks }) {
  // Menggunakan useMemo untuk menghitung statistik hanya jika tasks berubah
  const completedTasks = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);
  const totalTasks = tasks.length;
  const incompleteTasks = totalTasks - completedTasks;

  return (
    <div>
      <h3>Task Stats</h3>
      <p>Total: {totalTasks}</p>
      <p>Completed: {completedTasks}</p>
      <p>Incomplete: {incompleteTasks}</p>
    </div>
  );
}

export default TaskStats;
