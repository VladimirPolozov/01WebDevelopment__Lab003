import Task from './Task';

export function TaskList({ tasks, actions }) {
  if (tasks.length === 0) {
    return (
      <div className="no-tasks">
        <p>No tasks</p>
      </div>
    );
  }

  return (
    <div className="tasks-container">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          actions={actions}
        />
      ))}
    </div>
  );
}