import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "src/utils";

interface IPaymentState {
  paymentLoading: boolean;
  error?: string;
}

const initialState: IPaymentState = {} as IPaymentState;

export const buyProduct = createAsyncThunk(
  "subcription/buyProduct",
  async function (priceId: number, { rejectWithValue }) {
    try {
      const response = await api.post("payments/buy", {
        priceId,
      });
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.message);
    }
  }
);

export const paymentReducer = createReducer<IPaymentState>(initialState, {
  [buyProduct.pending.type]: (state) => {
    state.paymentLoading = true;
  },
  [buyProduct.fulfilled.type]: (state) => {
    state.paymentLoading = false;
  },
  [buyProduct.rejected.type]: (state, action: PayloadAction<string>) => {
    state.paymentLoading = false;
    state.error = action.payload;
  },
});
