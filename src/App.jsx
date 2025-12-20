import './App.css'
import { useTasks } from './hooks/useTasks';
import TaskList from './components/TaskList';
import './App.css';


function App() {
  const { tasks, actions } = useTasks();

  return (
    <TaskList tasks={tasks} actions={actions} />
  );
}
export default App;