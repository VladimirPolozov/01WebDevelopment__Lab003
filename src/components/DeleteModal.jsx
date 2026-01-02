import { useEffect, useRef } from 'react';

function DeleteModal({ onDelete, onCancel }) {
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onCancel();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onCancel]);

  return (
    <div className="modal" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>Delete this task?</p>
        <div className="modal-buttons">
          <button onClick={onDelete} className="btn">Yes</button>
          <button onClick={onCancel} className="btn">No</button>
        </div>
      </div>
    </div>
  );
}
export default DeleteModal;