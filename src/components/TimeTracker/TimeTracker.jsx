import { useSelector, useDispatch } from 'react-redux';
import { logTime } from '../../features/tracker/trackerSlice';

export default function TimeTracker() {
  const { tasks } = useSelector(state => state.tasks);
  const { logs } = useSelector(state => state.tracker);
  const dispatch = useDispatch();

  const handleLog = (taskId) => {
    const timeSpent = Math.floor(Math.random() * 60) + 1; // Mock 1-60 min
    dispatch(logTime({ taskId, timeSpent, timestamp: Date.now() }));
  };

  const getTimeSpent = (taskId) => {
    return logs.filter(log => log.taskId === taskId).reduce((a, b) => a + b.timeSpent, 0);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Time Tracker</h2>
      {tasks.map(task => (
        <div key={task.id} className="flex justify-between border p-3 rounded mb-2">
          <div>{task.title}</div>
          <div>{getTimeSpent(task.id)} mins</div>
          <button className="bg-indigo-500 text-white px-2 py-1 rounded" onClick={() => handleLog(task.id)}>Log Time</button>
        </div>
      ))}
    </div>
  );
}
