import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action) => {
      const newTask = { id: nanoid(), ...action.payload };
      state.tasks.push(newTask);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state.tasks[index] = action.payload;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    approveTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.status = 'Approved';
    },
    reopenTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.status = 'Reopened';
    },
  },
});

export const { createTask, updateTask, deleteTask, approveTask, reopenTask } = taskSlice.actions;
export default taskSlice.reducer;
