import './App.css'
import { useTasks } from './hooks/useTasks';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


function App() {
  const { tasks, actions } = useTasks();

  return (
    <>
      <TaskForm onAdd={actions.add} />
      <div className="tasks-container">
        <TaskList tasks={tasks} actions={actions} />
      </div>
    </>
  );
}
export default App;