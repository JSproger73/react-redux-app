export function thunk(state) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      if (typeof action === 'function') {
        console.log('functions');
      } else {
        return next(action);
      }
    };
  };
}
