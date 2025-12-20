export function Task({ task, actions }) {
  return (
    <div className="task-container">
      <div className="task">
        <div className="task__info">
          <h3 className="card__title">{task.title}</h3>
          <p className="task__desc">{task.desc}</p>
        </div>
        <div className="task__actions">
          <button onClick={() => actions.delete(task.id)}>X</button>
        </div>
      </div>
    </div>
  );
}