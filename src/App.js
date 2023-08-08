import { Provider } from "react-redux";
import "./App.css";
import store from "./Redux/Store";
import CakeContainer from "./component/CakeContainer";
import HooksCakeContainer from "./component/HooksCakeContainer";
import HooksChocolateContainer from "./component/HooksChocolateContainer";
import NewCakeContainer from "./component/NewCakeContainer";
import NewHooksCakeContainer from "./component/NewHooksCakeContainer";
import ItemContainer from "./component/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer />
        <NewHooksCakeContainer />
        <NewCakeContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <HooksChocolateContainer />
      </div>
    </Provider>
  );
}

export default App;
