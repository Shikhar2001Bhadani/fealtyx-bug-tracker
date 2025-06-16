import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../features/tasks/taskSlice';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ title, priority, status: 'Open' }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input className="border p-2 rounded w-1/2" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <select className="border p-2 rounded" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600" type="submit">Add Task</button>
    </form>
  );
}
