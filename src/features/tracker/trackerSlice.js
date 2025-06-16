import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logs: [], // { taskId, timeSpent (in minutes), timestamp }
};

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    logTime: (state, action) => {
      state.logs.push(action.payload); // { taskId, timeSpent, timestamp }
    },
  },
});

export const { logTime } = trackerSlice.actions;
export default trackerSlice.reducer;
