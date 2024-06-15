import { NavLink, useParams } from "react-router-dom";
import { store } from "./store";

function Mem() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <NavLink to={"/"}>На главную</NavLink>
      <h1>{id}</h1>
      <p>{store.getState().coun ters[id].counter}</p>
    </div>
  );
}

export default Mem;
