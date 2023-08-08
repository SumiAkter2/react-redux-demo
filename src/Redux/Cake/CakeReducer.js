import { BUY_CAKE } from "./CakeActionType";

const initialState = {
  numOfCake: 10,
};
const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };
    default:
      return state;
  }
};

export default CakeReducer;
