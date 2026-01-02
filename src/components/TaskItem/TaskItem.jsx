import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, pinTask } from '../../features/tasks/tasksSlice';
import EditModal from '../../modals/EditModal';
import DeleteModal from '../../modals/DeleteModal';
import ShareModal from '../../modals/ShareModal'
import './TaskItem.css';

function Task({ task }) {
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

  const dispatch = useDispatch();

  const handleSave = (newTitle, newDesc) => {
    dispatch(editTask({ id: task.id, title: newTitle, desc: newDesc }));
    setShowEditModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handlePin = () => {
    dispatch(pinTask(task.id));
  };

  return (
    <div className="task-card__container" ref={taskRef} onClick={() => setShowMenu(true)}>
      <div className="task">
        <div className="task__info">
          <h3 className="task__title">{task.title}</h3>
          <p className="task__desc">{task.desc}</p>  
        </div>
        <div className="task__actions">
          <button className={`btn pin-task-btn ${task.isPinned ? 'pinned' : ''}`} onClick={(e) => {e.stopPropagation(); handlePin(); }} title={task.isPinned ? "Открепить" : "Закрепить"}><i className={`fas ${task.isPinned ? 'fa-thumbtack' : 'fa-thumbtack'}`}></i></button>
        </div>
      </div>
      {showMenu && (
        <div className="context-menu">
          <button className="btn context-menu__btn" onClick={() => handleAction('share')} title="Поделиться"><i className="fa fa-share-alt context-menu__icon"></i></button>
          <button className="btn context-menu__btn" onClick={() => handleAction('info')}><i className="fas fa-info-circle context-menu__icon"></i></button>
          <button className="btn context-menu__btn" onClick={() => handleAction('edit')}><i className="fas fa-edit context-menu__icon"></i></button>
          <button onClick={() => handleAction('delete')} className="btn context-menu__btn"><i className="fas fa-trash context-menu__icon"></i></button>
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
          onDelete={handleDelete}
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