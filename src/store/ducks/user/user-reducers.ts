import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "src/utils";
import { selectProduct, logOutUser } from "./user-actions";
import { IProduct } from "src/types";
import { IUsernameUpdate } from "src/components";

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
  token: string;
  user: IUser;
  selectedProduct?: IProduct;
  loginIsLoading: boolean;
  updateInfoLoading: boolean;
  updatePasswordLoading: boolean;
  error?: string;
}

const initialState: IUserState = {
  token: "",
  user: {
    id: 0,
    email: "",
    username: "",
  },
  updateInfoLoading: false,
  updatePasswordLoading: false,
  loginIsLoading: false,
};

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

export const updateUserInfo = createAsyncThunk(
  "user/updateUserInfo",
  async function (userData: IUsernameUpdate, { rejectWithValue }) {
    const { email, username } = userData;
    try {
      const response = await api.patch("users", {
        email,
        username,
      });
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.response.data.message);
    }
  }
);

interface IUpdatePassword {
  currentPassword: string;
  newPassword: string;
}

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async function (userData: IUpdatePassword, { rejectWithValue }) {
    const { currentPassword, newPassword } = userData;
    try {
      const response = await api.patch("users/update-password", {
        currentPassword,
        newPassword,
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
    state.loginIsLoading = true;
  },
  [loginUser.fulfilled.type]: (state, action: PayloadAction<IUserState>) => {
    state.loginIsLoading = false;
    state.token = action.payload.token;
    state.user = action.payload.user;
    state.error = "";
  },
  [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
    state.loginIsLoading = false;
    state.error = action.payload;
  },
  [selectProduct.type]: (state, action: PayloadAction<IProduct>) => {
    state.selectedProduct = action.payload;
  },
  [logOutUser.type]: (state, action) => {
    return initialState;
  },
  [updateUserInfo.pending.type]: (state) => {
    state.updateInfoLoading = true;
    state.error = "";
  },
  [updateUserInfo.fulfilled.type]: (
    state,
    action: PayloadAction<IUsernameUpdate>
  ) => {
    state.updateInfoLoading = false;
    state.user.username = action.payload.username;
    state.user.email = action.payload.email;
  },
  [updateUserInfo.rejected.type]: (state, action: PayloadAction<string>) => {
    state.updateInfoLoading = false;
    state.error = action.payload;
  },
  [updatePassword.pending.type]: (state) => {
    state.updatePasswordLoading = true;
    state.error = "";
  },
  [updatePassword.fulfilled.type]: (
    state,
    action: PayloadAction<IUpdatePassword>
  ) => {
    state.updatePasswordLoading = false;
  },
  [updatePassword.rejected.type]: (state, action: PayloadAction<string>) => {
    state.updatePasswordLoading = false;
    state.error = action.payload;
  },
});

export default userReducer;
