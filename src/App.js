import { Provider } from "react-redux";
import "./App.css";
import store from "./Redux/Store";
import CakeContainer from "./component/Cake/cakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
