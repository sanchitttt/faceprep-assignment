import { createSlice } from "@reduxjs/toolkit"
import productsData from '../assets/cleanedJSON.json';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardProps, ProductsInitialState } from "../types/types";
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: ProductsInitialState = {
    'products': [],
    'visibleProducts': [],
    'isLoading': false
}

export const fetchProducts = createAsyncThunk('loadData', (): Promise<CardProps[]> => {
    return new Promise<CardProps[]>((resolve) => {
        setTimeout(() => {
            resolve(productsData)
        }, 1500);
    })
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        enableLoading: (state) => {
            state.isLoading = true;
        },
        disableLoading: (state) => {
            state.isLoading = false;
        },
        loadNextProducts: (state) => {
            let i = state.visibleProducts.length;
            const j = i + 5;
            while (i < j && j < state.products.length) {
                state.visibleProducts.push(state.products[i++]);
            }
            state.isLoading = false;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<CardProps[]>) => {
            state.products = action.payload;
            state.visibleProducts = action.payload.slice(0, 15);
            state.isLoading = false;
        })
    },

})

export default productsSlice;