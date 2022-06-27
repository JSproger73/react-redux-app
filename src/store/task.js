import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Task_1", compleated: false },
  { id: 2, title: "Task_2", compleated: false },
];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    update(state, action) {
      const elementIndex = state.findIndex((el) => el.id === action.payload.id);
      state[elementIndex] = { ...state[elementIndex], ...action.payload };
    },
    remove(state, action) {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

const { actions, reducer: taskReducer } = taskSlice;
const { update, remove } = actions;

export function taskCompleated(id) {
  return update({ id, compleated: true });
}
export function titleChanged(id) {
  return update({ id, title: `New title for ${id}` });
}

export function taskDeleted(id) {
  return remove({ id });
}

export default taskReducer;
