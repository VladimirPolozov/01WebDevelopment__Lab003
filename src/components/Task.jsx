import { useState, useRef, useEffect } from 'react';
import './Task.css'
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import ShareModal from './ShareModal';

function Task({ task, actions }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
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
      setShowShareModal(true);
    } else if (actionType === 'info') {
      alert('Title: ' + task.title + '\n' + 'About: ' + task.desc);
    } else if (actionType === 'edit') {
      setShowEditModal(true);
    } else if (actionType === 'delete') {
      setShowDeleteModal(true);
    }
    setShowMenu(false);
  };

  const handleSave = (newTitle, newDesc) => {
    actions.edit(task.id, newTitle, newDesc);
    setShowEditModal(false);
  };

  return (
    <div className="task-card__container" ref={taskRef} onClick={() => setShowMenu(true)}>
      <div className="task">
        <div className="task__info">
          <h3 className="task__title">{task.title}</h3>
          <p className="task__desc">{task.desc}</p>  
        </div>
        <div className="task__actions">
          <button onClick={() => handleAction('delete')} className="btn delete-task-btn">X</button>
        </div>
      </div>
      {showMenu && (
        <div className="context-menu">
          <button className="btn context-menu__btn" onClick={() => handleAction('share')} title="Поделиться"><i className="fa fa-share-alt context-menu__icon"></i></button>
          <button className="btn context-menu__btn" onClick={() => handleAction('info')}><i className="fas fa-info-circle context-menu__icon"></i></button>
          <button className="btn context-menu__btn" onClick={() => handleAction('edit')}><i className="fas fa-edit context-menu__icon"></i></button>
        </div>
      )}
      {showEditModal && (
        <EditModal
          task={task}
          onSave={handleSave}
          onCancel={() => setShowEditModal(false)}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          onDelete={() => actions.delete(task.id)}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
      {showShareModal && (
        <ShareModal
          task={task}
          onCancel={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
}
export default Task;