import { useState } from 'react';

function EditModal({ task, onSave, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.desc);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert('Заполните оба поля!');
      return;
    }

    onSave(title, desc);
  };

  return (
    <div className="modal" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>Edit task</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} placeholder="Title..." className="modal-input" onChange={(e) => setTitle(e.target.value)}></input>
          <textarea value={desc} placeholder="About..." className="modal-textarea" onChange={(e) => setDesc(e.target.value)}></textarea>
          <div className="modal-buttons">
            <button type="button" onClick={onCancel} className="btn btn--cancel">Cancel</button>
            <button type="submit" className="btn btn--save">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditModal;