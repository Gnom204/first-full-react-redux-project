import { NavLink, useParams } from "react-router-dom";
import { store } from "./store";

function Mem() {
  const { id } = useParams();
  return (
    <div>
      <NavLink to={"/"}>На главную</NavLink>
      <h1>{id}</h1>
      <p>{id && store.getState().counters?.[id]?.counter}</p>
    </div>
  );
}

export default Mem;
