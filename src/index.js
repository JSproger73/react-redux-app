import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { taskCompleated, titleChanged, taskDeleted } from "./store/task";
import configureStore from "./store/store";

const store = configureStore();

const App = () => {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  const compleateTask = (taskId) => {
    store.dispatch(taskCompleated(taskId));
  };

  const changeTitle = (taskId) => {
    store.dispatch(titleChanged(taskId));
  };

  const deleteTask = (taskId) => {
    store.dispatch(taskDeleted(taskId));
  };

  return (
    <>
      <h1>APP</h1>

      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Compleated: ${el.compleated}`}</p>
            <button onClick={() => compleateTask(el.id)}>Compleated</button>
            <button onClick={() => changeTitle(el.id)}>Change title</button>
            <button onClick={() => deleteTask(el.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
