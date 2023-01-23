/* eslint-disable import/no-anonymous-default-export */
import { defineState } from "redux-localstore";
import * as types from "./types";

const INITIAL_STATE = {
  user: null,
  token: null,
};

const storedState = defineState(INITIAL_STATE)("session");

export default (state = storedState, action) => {
  switch (action.type) {
    case types.ON_AUTHENTICATION:
      return {
        ...state,
        ...action.payload,
      };
    case types.ON_LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
