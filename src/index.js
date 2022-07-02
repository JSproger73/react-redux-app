import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  titleChanged,
  taskDeleted,
  completeTask,
  loadTasks,
  getTasks,
  getTasksLoadingStatus,
  createTask,
} from './store/task';
import configureStore from './store/store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getError } from './store/errors';

const store = configureStore();

const App = () => {
  const state = useSelector(getTasks());
  const isLoading = useSelector(getTasksLoadingStatus());
  const error = useSelector(getError());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  const addNewTask = () => {
    dispatch(
      createTask({
        userId: 1,
        title: 'Some new task',
        completed: false,
      }),
    );
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1> App</h1>
      <button onClick={addNewTask}>Create task</button>
      <ul>
        {state.map((el) => (
          <>
            <li key={el.id}>
              <p>Task ID {el.id}</p>
              <p>{el.title}</p>
              <p> {`Completed: ${el.completed}`}</p>
              <button onClick={() => dispatch(completeTask(el.id))}>Complete</button>
              <button onClick={() => dispatch(titleChanged(el.id))}>Change title</button>
              <button onClick={() => dispatch(taskDeleted(el.id))}>Delete</button>
              <hr />
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
