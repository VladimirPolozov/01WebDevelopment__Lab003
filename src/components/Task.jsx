import './Task.css'

function Task({ task, actions }) {
  return (
    <div className="task">
      <div className="task__info">
        <h3 className="task__title">{task.title}</h3>
        <p className="task__desc">{task.desc}</p>
      </div>
      <div className="task__actions">
        <button onClick={() => actions.delete(task.id)} className="btn delete-task-btn">X</button>
      </div>
    </div>
  );
}
export default Task;