import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer />
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
