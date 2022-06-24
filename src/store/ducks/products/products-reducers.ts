import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk} from "@reduxjs/toolkit";
import { IProducts } from 'src/types'
import { axiosInstance } from 'src/utils'; 

export interface IProductsState {
  products: IProducts,
  status: string,
  error: string
}

const initialState: IProductsState = {} as IProductsState

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async function (_, {rejectWithValue}) {
    try {
      const response = await axiosInstance.get(`products`);
      return response.data
    }
    catch (error: any) {
      if (!error.message) throw error
      return rejectWithValue(error.message)
    }
  }
)

export const productsReducer = createReducer<IProductsState >(initialState, {
  [getProducts.pending.type]: (state) => {
    state.status= "loading"
  },
  [getProducts.fulfilled.type]: (state, action: PayloadAction<IProducts >) => {
    state.status = 'resolved'
    state.products = action.payload
  },
  [getProducts.rejected.type]: (state, action: PayloadAction<string>) => {
    state.status = 'error'
    state.error = action.payload
  }
})

export default productsReducer