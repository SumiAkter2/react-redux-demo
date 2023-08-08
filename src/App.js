import { Provider } from "react-redux";
import "./App.css";
import store from "./Redux/Store";
import CakeContainer from "./component/CakeContainer";
import HooksCakeContainer from "./component/HooksCakeContainer";
import HooksChocolateContainer from "./component/HooksChocolateContainer";
import NewCakeContainer from "./component/NewCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksChocolateContainer />
        <NewCakeContainer/>
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
