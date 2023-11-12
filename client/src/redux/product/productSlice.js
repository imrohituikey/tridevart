import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ProductList : [],
    error : null,
    loading : false,
};

const productFetch = createSlice({
    name : "product",
    initialState,
    reducers : {
        productFetchSuccess : (state,action) =>{
            state.ProductList = action.payload;
            state.error = null;
            state.loading= false;
        },
    }
});

export const {productFetchSuccess} = productFetch.actions;
export default productFetch.reducer;
