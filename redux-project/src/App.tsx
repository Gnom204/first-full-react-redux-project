import { useEffect, useReducer } from "react";

import "./App.css";
import { CounterId, DecrementAction, IncrementAction, store } from "./store";
import { NavLink } from "react-router-dom";
import Form from "./Form";
import Layout from "./Layout";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <h1>Счетчики</h1>

      <div className="card">
        <Form></Form>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export function Counter({ counterId }: { counterId: CounterId }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });
    return unsubscribe;
  }, []);

  return (
    <div className="counter">
      <button
        onClick={() =>
          store.dispatch({
            type: "increment",
            payload: { counterId },
          } satisfies IncrementAction)
        }
      >
        increment
      </button>
      <p className="count">
        {counterId}
        <span className="count-value">
          {store.getState().counters[counterId]?.counter}
        </span>
      </p>
      <button
        onClick={() =>
          store.dispatch({
            type: "decrement",
            payload: { counterId },
          } satisfies DecrementAction)
        }
      >
        decrement
      </button>
    </div>
  );
}
export default App;
