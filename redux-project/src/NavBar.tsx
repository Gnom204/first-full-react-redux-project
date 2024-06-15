import React, { useEffect, useState } from "react";
import { CounterState, store } from "./store";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const [arrayOfCounters, setArrayOfCounters] = useState([]);
  const [counters, setCounters] = useState([]);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const counterss: Record<CounterId, CounterState> =
        store.getState().counters;
      setCounters(counterss);

      setArrayOfCounters(Object.keys(counterss));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    setArrayOfCounters(Object.keys(store.getState().counters));
  }, []);

  console.log(arrayOfCounters, store.getState().counters);

  return (
    <div className="nav">
      {arrayOfCounters.map((el) => {
        return (
          <NavLink className="link" to={`/counter/${el}`} key={el}>
            {el}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavBar;
