import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICode } from "src/types";
import { api } from "src/utils";


interface ICodesState {
  codes: ICode[];
  codesLoading: boolean;
  error?: string;
}

const initialState: ICodesState = {
  codes: [],
  codesLoading: false,
};

export const getCodes = createAsyncThunk(
  "code/getCodes",
  async function (__, { rejectWithValue }) {
    try {
      const response = await api.post(`code/self`);
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.message);
    }
  }
);

export const activateCode = createAsyncThunk(
  "code/activateCode",
  async function (codeId: string, { rejectWithValue }) {
    try {
      const response = await api.post(`code/activate`, { codeId });
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.message);
    }
  }
);

export const manageCodes = createAsyncThunk(
  "code/manageCodes",
  async function (
    data: { codesIds: number[]; subscribeId: number },
    { rejectWithValue }
  ) {
    try {
      const response = await api.put(`code/manage`, data);
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.message);
    }
  }
);

export const codeReducer = createReducer<ICodesState>(initialState, {
  [getCodes.pending.type]: (state) => {
    state.codesLoading = true;
  },
  [getCodes.fulfilled.type]: (state, action: PayloadAction<ICode[]>) => {
    state.codesLoading = false;
    state.codes = action.payload;
  },
  [getCodes.rejected.type]: (state, action: PayloadAction<string>) => {
    state.codesLoading = false;
    state.error = action.payload;
  },
  [activateCode.pending.type]: (state) => {
    state.codesLoading = true;
  },
  [activateCode.fulfilled.type]: (state, action: PayloadAction<ICode>) => {
    state.codesLoading = false;
    state.codes.forEach((code) => {
      if (code.id === action.payload.id) {
        code.status = action.payload.status;
        code.code = action.payload.code;
        code.origin = action.payload.origin;
      }
    });
  },
  [activateCode.rejected.type]: (state, action: PayloadAction<string>) => {
    state.codesLoading = false;
    state.error = action.payload;
  },
  [manageCodes.pending.type]: (state) => {
    state.codesLoading = true;
  },
  [manageCodes.fulfilled.type]: (state, action: PayloadAction<ICode[]>) => {
    state.codesLoading = false;
    state.codes = action.payload
  },
  [manageCodes.rejected.type]: (state, action: PayloadAction<string>) => {
    state.codesLoading = false;
    state.error = action.payload;
  },
});
