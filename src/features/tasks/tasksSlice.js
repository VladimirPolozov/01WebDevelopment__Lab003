import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: Date.now().toString(),
        title: action.payload.title.trim(),
        desc: action.payload.desc.trim(),
        createdAt: new Date().toISOString()
      });
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = state.items.find(t => t.id === action.payload.id);
      if (task) {
        task.title = action.payload.title.trim();
        task.desc = action.payload.desc.trim();
      }
    }
  }
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;