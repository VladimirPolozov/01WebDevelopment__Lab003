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
    },

    pinTask: (state, action) => {
      const taskId = action.payload;
      const task = state.items.find(t => t.id === taskId);
      
      if (task) {
        if (task.isPinned) {
          task.isPinned = false;
          return;
        }
        
        const pinnedTasks = state.items.filter(t => t.isPinned);
        
        if (pinnedTasks.length >= 3) {
          const sortedPinned = [...pinnedTasks].sort((a, b) => 
            new Date(a.createdAt) - new Date(b.createdAt)
          );

          const oldestPinned = sortedPinned[0];
          if (oldestPinned) {
            oldestPinned.isPinned = false;
          }
        }
        
        task.isPinned = true;
      }
    }
  }
});

export const { addTask, deleteTask, editTask, pinTask } = tasksSlice.actions;
export default tasksSlice.reducer;