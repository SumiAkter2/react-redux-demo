import { Provider } from "react-redux";
import "./App.css";
import store from "./Redux/Store";
import CakeContainer from "./component/CakeContainer";
import HooksCakeContainer from "./component/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
