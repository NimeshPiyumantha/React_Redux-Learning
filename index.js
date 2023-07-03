const redux = require('redux');
const createStore =redux.createStore("");


const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

//(previousState,acton) => newState
const initialSate = {
  numOfCakes: 10,
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial state",store.getState());