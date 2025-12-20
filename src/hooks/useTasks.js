import { useState, useEffect } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const actions = {
    add: (title, desc) => {
      const newTask = {
        id: Date.now().toString(),
        title: title.trim(),
        desc: desc.trim(),
        createdAt: new Date().toISOString()
      };
      setTasks(prev => [...prev, newTask]);
    },

    delete: (id) => {
      setTasks(prev => prev.filter(task => task.id !== id));
    },

    edit: (id, newTitle, newDesc) => {
      setTasks(prev =>
        prev.map(task =>
          task.id === id
            ? { ...task, title: newTitle.trim(), desc: newDesc.trim() }
            : task
        )
      );
    },
  };

  return { tasks, actions };
}