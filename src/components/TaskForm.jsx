import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import { useState } from 'react';
import './TaskForm.css'

function TaskForm() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !desc.trim()) {
      alert('Заполните оба поля!');
      return;
    }

    dispatch(addTask({ title, desc }));
    
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