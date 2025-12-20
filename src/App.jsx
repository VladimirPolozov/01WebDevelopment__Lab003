import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [tasks, setTasks] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      {renderTasks(tasks)}
    </>
  )
}

function renderTasks(tasks) {
  if ( tasks.length === 0 ) {
    return (
      <div className="no-tasks">
        <p>No tasks</p>
      </div>
    );
  }

  return (
    <div className="tasks-container">
      {tasks.map(task => (
        <div key={task.id} className="task-container">
          <div className="task">
            <div className="task__info">    
              <h3 className="card__title">{task.title}</h3>
              <p className="task__desc">{task.desc}</p>
            </div>
            <div class="task__actions">
              <button data-action="delete" title="Удалить">X</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App