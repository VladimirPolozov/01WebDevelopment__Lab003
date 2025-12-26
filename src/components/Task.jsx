import { useState, useRef, useEffect } from 'react';
import './Task.css'

function Task({ task, actions }) {
  const [showMenu, setShowMenu] = useState(false);
  const taskRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (taskRef.current && !taskRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAction = (actionType) => {
    if (actionType === 'share') {
      alert('Поделиться задачей: ' + task.title);
    } else if (actionType === 'info') {
      alert('Информация о задаче: ' + task.id);
    } else if (actionType === 'edit') {
      actions.edit(task.id, 'Новый заголовок', task.desc); // пример
    }
    setShowMenu(false);
  };

  return (
    <div className="task-card__container" ref={taskRef} onClick={() => setShowMenu(true)}>
      <div className="task">
        <div className="task__info">
          <h3 className="task__title">{task.title}</h3>
          <p className="task__desc">{task.desc}</p>  
        </div>
        <div className="task__actions">
          <button onClick={() => actions.delete(task.id)} className="btn delete-task-btn">X</button>
        </div>
      </div>
      {showMenu && (
        <div className="context-menu">
          <button className="btn context-menu__btn" onClick={() => handleAction('share')} title="Поделиться"><i className="fa fa-share-alt context-menu__icon"></i></button>
          <button className="btn context-menu__btn" onClick={() => handleAction('info')}><i className="fas fa-info-circle context-menu__icon"></i></button>
          <button className="btn context-menu__btn" onClick={() => handleAction('edit')}><i className="fas fa-edit context-menu__icon"></i></button>
        </div>
      )}
    </div>
  );
}
export default Task;