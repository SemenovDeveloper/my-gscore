import { createAction } from "@reduxjs/toolkit";

export const registerUser = createAction<string>('register-user')