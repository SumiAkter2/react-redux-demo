import { combineReducers } from "redux";
import ChocolateReducer from "./Chocolate/ChocolateReducer";
import CakeReducer from "./Cake/CakeReducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
  chocolate: ChocolateReducer,
});
export default rootReducer;
