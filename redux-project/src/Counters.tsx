import React from "react";
import { Counter } from "./App";
function Counters({ counters }) {
  return (
    <div>
      {counters.map((el: string) => {
        return <Counter key={el} counterId={el} />;
      })}
    </div>
  );
}

export default Counters;
