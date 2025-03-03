// utils/taskUtils.js

const TASKS_KEY = 'tasks';

export const getTasksFromStorage = () => {
  const savedTasks = localStorage.getItem(TASKS_KEY);
  return savedTasks ? JSON.parse(savedTasks) : {
    todo: [],
    inProgress: [],
    completed: []
  };
};

export const saveTasksToStorage = (tasks) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
