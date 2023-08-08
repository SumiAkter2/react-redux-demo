import { combineReducers } from "redux";
import ChocolateReducer from "./Chocolate/ChocolateReducer";
import CakeReducer from "./Cake/CakeReducer";
import { useReducer } from "react";

const rootReducer = combineReducers({
  cake: CakeReducer,
  chocolate: ChocolateReducer,
  user: useReducer,
});
export default rootReducer;
