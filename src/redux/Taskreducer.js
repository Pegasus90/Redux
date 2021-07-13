import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
  DONE_Task,
  UNDONE_TASK,
  ALL_Tasks,
} from "./actionTypes";

// initial state for task reducer
const initState = {
  todo: [],
  search: "",
};

// task reducer and switch cases for every action type
const Taskreducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, todo: [...state.todo, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        todo: state.todo.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      let newTasks = state.todo.map((task) =>
        task.id === action.payload.id
          ? { ...task, description: action.payload.value }
          : task
      );
      return { ...state, todo: newTasks };
    case COMPLETE_TASK:
      return {
        ...state,
        todo: state.todo.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    case DONE_Task:
      return { ...state, search: true };
    case UNDONE_TASK:
      return { ...state, search: false };
    case ALL_Tasks:
      return { ...state, search: "all" };
    default:
      return state;
  }
};

export default Taskreducer;
