import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "src/utils";
import { selectProduct, logOutUser } from "./user-actions";
import { IProduct } from "src/types";

interface ILoginData {
  email: string;
  password: string;
}

interface IUser {
  id: number;
  email: string;
  username: string;
}

interface IUserState {
  token: string | null;
  user: IUser;
  selectedProduct?: IProduct;
  loginStatus?: string;
  error?: string;
}

const initialState: IUserState = { token: null, user: {} as IUser };

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async function (userData: ILoginData, { rejectWithValue }) {
    const { email, password } = userData;
    try {
      const response = await api.post("users/sign-in", {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const userReducer = createReducer<IUserState>(initialState, {
  [loginUser.pending.type]: (state) => {
    state.loginStatus = "loading";
  },
  [loginUser.fulfilled.type]: (state, action: PayloadAction<IUserState>) => {
    state.loginStatus = "resolved";
    state.token = action.payload.token;
    state.user = action.payload.user;
    state.error = "";
  },
  [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
    state.loginStatus = "error";
    state.error = action.payload;
  },
  [selectProduct.type]: (state, action: PayloadAction<IProduct>) => {
    state.selectedProduct = action.payload;
  },
  [logOutUser.type]: (state, action) => {
    return initialState
  },
});
