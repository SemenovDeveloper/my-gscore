import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "./user-actions";

const initialState = {
  token: "",
  user: {
    id: 0,
    email: "",
    username: "",
  },
};

export const columnReducer = createReducer(initialState, (builder) => {
  // builder
  // .addCase(registerUser, (state, action: PayloadAction<UserProps>) => {
  //   return action.payload
  // });
});