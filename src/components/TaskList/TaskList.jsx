import { useDispatch } from 'react-redux';
import { deleteTask, editTask, pinTask } from '../../features/tasks/tasksSlice';
import Task from '../TaskItem/TaskItem';
import './TaskList.css'

function TaskList({ tasks }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, newTitle, newDesc) => {
    dispatch(editTask({ id, title: newTitle, desc: newDesc }));
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.isPinned && b.isPinned) {
      return a.title.localeCompare(b.title, 'ru', { sensitivity: 'base' });
    }

    if (!a.isPinned && !b.isPinned) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    return b.isPinned - a.isPinned;
  });


  if (tasks.length === 0) {
    return (
      <div className="no-tasks">
        <p>No tasks</p>
      </div>
    );
  }

  return (
    <>
      {sortedTasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </>
  );
}
export default TaskList;