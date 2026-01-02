import { useSelector, useDispatch } from 'react-redux';;
import { selectAllTasks } from './features/tasks/tasksSelectors';
import { addTask } from './features/tasks/tasksSlice';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import './App.css'

function App() {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();

  const handleAddTask = (title, desc) => {
    dispatch(addTask({ title, desc }));
  };


  return (
    <>
      <TaskForm onAdd={handleAddTask} />
      <div className="tasks-container">
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}
export default App;