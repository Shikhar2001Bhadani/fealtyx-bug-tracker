import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, approveTask, reopenTask } from '../../features/tasks/taskSlice';

export default function TaskList() {
  const { tasks } = useSelector(state => state.tasks);
  const { role } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div key={task.id} className="p-4 border rounded shadow flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-500">Priority: {task.priority}</p>
            <p className="text-sm">Status: {task.status}</p>
          </div>
          <div className="space-x-2">
            {role === 'developer' && (
              <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            )}
            {role === 'manager' && task.status === 'Open' && (
              <button onClick={() => dispatch(approveTask(task.id))} className="bg-blue-500 text-white px-2 py-1 rounded">Approve</button>
            )}
            {role === 'manager' && (
              <button onClick={() => dispatch(reopenTask(task.id))} className="bg-yellow-500 text-white px-2 py-1 rounded">Reopen</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
