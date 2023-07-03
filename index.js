const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Second redux action",
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecream: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

// Combine the cake and ice cream reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial state", store.getState()); //Initial state { cake: { numOfCakes: 10 }, icecream: { numOfIcecream: 20 } }

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(buyCake()); //Updated state { cake: { numOfCakes: 9 }, icecream: { numOfIcecream: 20 } }
store.dispatch(buyCake()); //Updated state { cake: { numOfCakes: 8 }, icecream: { numOfIcecream: 20 } }
store.dispatch(buyCake()); //Updated state { cake: { numOfCakes: 7 }, icecream: { numOfIcecream: 20 } }

store.dispatch(buyIcecream()); //Updated state { cake: { numOfCakes: 7 }, icecream: { numOfIcecream: 19 } }
store.dispatch(buyIcecream()); //Updated state { cake: { numOfCakes: 7 }, icecream: { numOfIcecream: 18 } }

unsubscribe();
