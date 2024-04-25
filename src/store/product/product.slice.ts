import { createSlice } from '@reduxjs/toolkit'
import { ProductStateModel } from '../../models/state/product-state.model'
import { ProductModel } from '../../models/product.model';

const initialState: ProductStateModel = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        setProducts: (state, action) => {
            state.products = action.payload;
        },

        addProduct: (state, action) => {
            state.products.unshift(action.payload);
        },
    },
});

export const { actions: productActions } = productSlice;
export const productReducer = productSlice.reducer;

export const setProductsAction = (products: ProductModel[]) => ({
    type: 'product/setProducts',
    payload: products,
});

export const addProductAction = (product: ProductModel) => ({
    type: 'product/addProduct',
    payload: product,
  });