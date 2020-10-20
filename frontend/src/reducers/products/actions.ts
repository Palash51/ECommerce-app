import axios from 'axios';
import { AnyAction } from "redux";

import { PRODUCT_LIST_PENDING, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_ERROR, PRODUCT_DETAILS_PENDING, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_ERROR } from './actionType';

export interface Dispatch<A> {
    <T extends A>(action: T): T
  }

const listProducts = () => async (dispatch:Dispatch<AnyAction>) => {

    try {
        dispatch({ type: PRODUCT_LIST_PENDING });
        const { data } = await axios.post("api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_ERROR, payload: error.message });
    }

}

const detailsProduct = (productId: string) => async (dispatch:Dispatch<AnyAction>) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_PENDING, payload: productId });
        const { data } = await axios.post("/api/products/" + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_ERROR, payload: error.message });
    }
}

export { listProducts, detailsProduct }