import { BUY_CHOCOLATE } from "./ChocolateActionType";

const initialState = {
  numOfChocolate: 20,
};

const ChocolateReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChocolate: state.numOfChocolate - 1,
      };
    default:
      return state;
  }
};
export default ChocolateReducer;
