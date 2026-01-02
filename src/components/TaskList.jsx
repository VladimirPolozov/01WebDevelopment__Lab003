import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../features/tasks/tasksSlice';
import Task from './Task';
import './TaskList.css'

function TaskList({ tasks }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, newTitle, newDesc) => {
    dispatch(editTask({ id, title: newTitle, desc: newDesc }));
  };

  if (tasks.length === 0) {
    return (
      <div className="no-tasks">
        <p>No tasks</p>
      </div>
    );
  }

  return (
    <>
      {tasks.map(task => (
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