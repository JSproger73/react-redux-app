import { legacy_createStore as createStore } from "redux";
import taskReducer from "./task";

const initialState = [
  { id: 1, title: "Task_1", compleated: false },
  { id: 2, title: "Task_2", compleated: false }
];

function configureStore() {
  return createStore(taskReducer, initialState);
}

export default configureStore;
