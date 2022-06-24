import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "src/utils";

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
  userPackage: number;
  user: IUser;
  loginStatus: string;
  error?: string;
}
const initialState: IUserState = {} as IUserState;

// export const loginUser = createAsyncThunk(
//   "products/getProducts",
//   async function (userData, { rejectWithValue }) {
//     const { username, login } = userData
//     try {
//       const response = await axiosInstance.post(`users/sign-in`);
//       return response.data;
//     } catch (error: any) {
//       if (!error.message) throw error;
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const loginUser = createAsyncThunk(
  "user/login",
  async function (userData: ILoginData, {rejectWithValue}) {
    const { email, password } = userData
    console.log('recieve', userData)
    try {
      const response = await axiosInstance.post(`users/sign-in`, {email, password});
      console.log(response)
      return response.data
    }
    catch (error: any) {
      if (!error.message) throw error
      return rejectWithValue(error.message)
    }
  }
)

export const userReducer = createReducer<IUserState>(initialState, {
  [loginUser.pending.type]: (state) => {
    state.loginStatus = "loading";
  },
  [loginUser.fulfilled.type]: (state, action: PayloadAction<IUserState>) => {
    state.loginStatus = "resolved";
    state.token = action.payload.token;
    state.user = action.payload.user;
  },
  [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
    state.loginStatus = "error";
    state.error = action.payload;
  },
});

