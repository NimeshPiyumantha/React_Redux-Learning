import { useSelector } from "react-redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
