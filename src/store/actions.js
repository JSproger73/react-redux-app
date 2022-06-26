import * as actions from './actionTypes';

export function taskCompleated(id) {
  return { type: actions.taskUpdated, payload: { id, compleated: true } };
}
export function titleChanged(id) {
  return {
    type: actions.taskUpdated,
    payload: { id, title: `New title for ${id}` },
  };
}

export function taskDeleted(id) {
  return {
    type: actions.taskDeleted,
    payload: { id, title: `New title for ${id}` },
  };
}
