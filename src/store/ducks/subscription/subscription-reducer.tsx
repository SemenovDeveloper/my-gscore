import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISubscription } from "src/types";
import { api } from "src/utils";


interface ISubscriptionsState {
  subscriptions: ISubscription[];
  subscriptionsLoading: boolean;
  error?: string;
}

const initialState: ISubscriptionsState = {} as ISubscriptionsState;

export const getSubscriptions = createAsyncThunk(
  "subscription/getSubscriptions",
  async function (_, { rejectWithValue }) {
    try {
      const response = await api.get(`subscribe/self`);
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.message);
    }
  }
);

export const productsReducer = createReducer<ISubscriptionsState>(
  initialState,
  {
    [getSubscriptions.pending.type]: (state) => {
      state.subscriptionsLoading = true;
    },
    [getSubscriptions.fulfilled.type]: (
      state,
      action: PayloadAction<ISubscription[]>
    ) => {
      state.subscriptions = action.payload;
      state.subscriptionsLoading = false;
    },
    [getSubscriptions.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.subscriptionsLoading = false;
      state.error = action.payload;
    },
  }
);
