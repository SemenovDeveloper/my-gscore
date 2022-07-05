import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "src/types";
import { api } from "src/utils";

interface IProductsState {
  products: IProduct[];
  status: string;
  error: string;
}

const initialState: IProductsState = {} as IProductsState;

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await api.get(`products`);
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.message);
    }
  }
);

export const productsReducer = createReducer<IProductsState>(initialState, {
  [getProducts.pending.type]: (state) => {
    state.status = "loading";
  },
  [getProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
    state.status = "resolved";
    state.products = action.payload;
  },
  [getProducts.rejected.type]: (state, action: PayloadAction<string>) => {
    state.status = "error";
    state.error = action.payload;
  },
});
