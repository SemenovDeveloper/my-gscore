import { createAction } from "@reduxjs/toolkit";
import { IProduct } from "src/types";

export const selectProduct = createAction<IProduct>('selectProduct')