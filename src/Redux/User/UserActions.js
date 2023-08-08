import { FETCH_TO_REQUEST } from "./UserActionType";

export const fetchToRequest = () => {
  return {
    type: FETCH_TO_REQUEST,
  };
};
export const fetchToSuccess = (user) => {
  return {
    type: FETCH_TO_REQUEST,
    payload: user,
  };
};
export const fetchToError = (error) => {
  return {
    type: FETCH_TO_REQUEST,
    payload: error,
  };
};
