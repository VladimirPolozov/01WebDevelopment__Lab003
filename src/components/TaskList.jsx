import './TaskList.css'
import Task from './Task';

function TaskList({ tasks, actions }) {
  if (tasks.length === 0) {
    return (
      <div className="no-tasks">
        <p>No tasks</p>
      </div>
    );
  }

  return (
    <>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          actions={actions}
        />
      ))}
    </>
  );
}
export default TaskList;