import { useEffect, useState } from "react";
import { store } from "./store";
import { NavLink } from "react-router-dom";

export function NavBar() {
  const [arrayOfCounters, setArrayOfCounters] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const initialCounters = store.getState().counters;
      setArrayOfCounters(Object.keys(initialCounters));
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
