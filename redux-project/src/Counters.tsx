import { Counter } from "./App";
type State = {
  counters: string[];
};
function Counters({ counters }: State) {
  return (
    <div>
      {counters.map((el: string) => {
        return <Counter key={el} counterId={el} />;
      })}
    </div>
  );
}

export default Counters;
