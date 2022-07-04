import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISubscription } from "src/types";
import { api } from "src/utils";

interface ISubscriptionsState {
  subscriptions: ISubscription[];
  subscriptionsLoading: boolean;
  error?: string;
}

const initialState: ISubscriptionsState = {
  subscriptions: [],
  subscriptionsLoading: false,
};

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

interface IChangeSubscription {
  productId: number;
  subscribeId: number;
}

export const changeSubscription = createAsyncThunk(
  "subscription/changeSubscription",
  async function (productData: IChangeSubscription, { rejectWithValue }) {
    const { productId, subscribeId } = productData;
    try {
      const response = await api.post("subscribe/change-product", {
        productId,
        subscribeId,
      });
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const subscriptionsReducer = createReducer<ISubscriptionsState>(
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
    [changeSubscription.pending.type]: (state) => {
      state.subscriptionsLoading = true;
    },
    [changeSubscription.fulfilled.type]: (state) => {
      state.subscriptionsLoading = false;
    },
    [changeSubscription.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.subscriptionsLoading = false;
      state.error = action.payload;
    },
  }
);
