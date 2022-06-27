import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "src/utils";

interface ISubscription {
  id: number;
  userId: number;
  currentPeriodStart: number;
  currentPeriodEnd: number;
}

interface ISubscriptionState {
  subscription: ISubscription
  paymentLoading: boolean;
  error?: string
}

const initialState: ISubscriptionState = {} as ISubscriptionState;

export const buyProduct = createAsyncThunk(
  "subcription/buyProduct",
  async function (priceId: number, { rejectWithValue }) {
    try {
      const response = await axiosInstance.post("payments/buy", {
        priceId
      });
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.message);
    }
  }
);

export const subscriptionReducer = createReducer<ISubscriptionState>(initialState, {
  [buyProduct.pending.type]: (state) => {
    state.paymentLoading = true;
  },
  [buyProduct.fulfilled.type]: (state, action: PayloadAction<ISubscription>) => {
    state.paymentLoading= false;
    state.subscription= action.payload;
  },
  [buyProduct.rejected.type]: (state, action: PayloadAction<string>) => {
    state.paymentLoading = false
    state.error = action.payload;
  },
});
