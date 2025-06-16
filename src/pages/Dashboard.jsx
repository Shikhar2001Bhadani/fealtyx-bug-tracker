import { useSelector } from 'react-redux';
import TaskForm from '../components/Tasks/TaskForm';
import TaskList from '../components/Tasks/TaskList';
import TimeTracker from '../components/TimeTracker/TimeTracker';

export default function Dashboard() {
  const { role } = useSelector(state => state.auth);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard - {role.toUpperCase()}</h1>
      <TaskForm />
      <TaskList />
      <TimeTracker />
    </div>
  );
}
