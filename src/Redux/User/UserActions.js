import axios from "axios";
import { FETCH_TO_REQUEST } from "./UserActionType";

export const fetchToRequest = () => {
  return {
    type: FETCH_TO_REQUEST,
  };
};
export const fetchToSuccess = (users) => {
  return {
    type: FETCH_TO_REQUEST,
    payload: users,
  };
};
export const fetchToError = (error) => {
  return {
    type: FETCH_TO_REQUEST,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    // dispatch(fetchToRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        console.log(users);
        dispatch(fetchToSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchToError(error.message));
      });
  };
};
