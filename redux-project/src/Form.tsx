import React, { FormEvent, useEffect, useState } from "react";
import Counters from "./Counters";
import { store } from "./store";

function Form() {
  const [counters, setCounters] = useState<string[]>([]);
  const [counterId, setCounterId] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCounters([...counters, counterId]);
    setCounterId("");
  };

  useEffect(() => {
    setCounters(Object.keys(store.getState().counters));
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Введи название для счетчика"
          value={counterId}
          type="text"
          onChange={(e) => setCounterId(e.target.value)}
        />
      </form>
      <Counters counters={counters}></Counters>
    </>
  );
}

export default Form;
