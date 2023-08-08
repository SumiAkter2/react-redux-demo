import { combineReducers } from "redux";
import ChocolateReducer from "./Chocolate/ChocolateReducer";
import CakeReducer from "./Cake/CakeReducer";
import userReducer from "./User/userReducer";


const rootReducer = combineReducers({
  cake: CakeReducer,
  chocolate: ChocolateReducer,
  user: userReducer,
});
export default rootReducer;
