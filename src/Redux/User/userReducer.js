import {
  FETCH_TO_ERROR,
  FETCH_TO_REQUEST,
  FETCH_TO_SUCCESS,
} from "./UserActionType";

const initialState = {
  loading: false,
  user: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TO_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case FETCH_TO_ERROR:
      return {
        loading: false,
        user: [action.payload],
        error: action.payload,
      };
    default:
      return state;
  }
};
