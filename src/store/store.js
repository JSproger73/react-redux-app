import { legacy_createStore as createStore } from 'redux';
import { taskReducer } from './taskReducer';

const initialState = [
  { id: 1, title: 'Task_1', compleated: false },
  { id: 2, title: 'Task_2', compleated: false },
];

export function initiateStore() {
  return createStore(taskReducer, initialState);
}
