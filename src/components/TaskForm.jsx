import './TaskForm.css'
import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !desc.trim()) {
      alert('Заполните оба поля!');
      return;
    }

    onAdd(title, desc);
    
    // Очистка формы
    setTitle('');
    setDesc('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form__fields">
        <input name="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="task-form__field" placeholder="Title..." />
        <input name="About" type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="task-form__field" placeholder="About..." />
      </div>
      <button type="submit" className="btn add-task-btn">+</button>
    </form>
  );
}
export default TaskForm;