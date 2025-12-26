function DeleteModal({ onDelete, onCancel }) {
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