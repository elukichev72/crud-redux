import { ProductModel } from "../models/product.model"
import axios from "axios"
import { PRODUCTS_URL } from "../constants/api.constants"
import { addProductAction, setProductsAction } from "../store/product/product.slice";
import { store } from "../store/store";

export const fetchProductsApi = async (): Promise<void> => {
    try {
      const response = await axios.get(PRODUCTS_URL);
      const products = response.data;

      store.dispatch(setProductsAction(products));
    } catch (e) {
      console.error(`Failed to fetch products: ${e}`);
    }
  };

  export const createProductApi = async (product: Partial<ProductModel>): Promise<void> => {
    try {
      const response = await axios.post(PRODUCTS_URL, product);
      const newProduct = response.data;
  
      store.dispatch(addProductAction(newProduct));
    } catch (e) {
      console.error(`Failed to create product: ${e}`);
    }
  };