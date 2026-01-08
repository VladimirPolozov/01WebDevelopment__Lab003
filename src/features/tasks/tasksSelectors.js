export const selectAllTasks = (state) => state.tasks.items;
export const selectTaskById = (state, taskId) => 
  state.tasks.items.find(task => task.id === taskId);