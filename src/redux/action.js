import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
  DONE_Task,
  UNDONE_TASK,
  ALL_Tasks,
} from "./actionTypes";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
};

export const updateTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};

export const doneTask = () => {
  return {
    type: DONE_Task,
  };
};

export const undonetask = () => {
  return {
    type: UNDONE_TASK,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const refreshList = () => {
  return {
    type: ALL_Tasks,
  };
};
