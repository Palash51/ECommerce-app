import axios from 'axios';
import { PRODUCT_LIST_PENDING, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_ERROR, PRODUCT_DETAILS_PENDING, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_ERROR } from './actionType';

const listProducts = () => async (dispatch:any) => {

    try {
        dispatch({ type: PRODUCT_LIST_PENDING });
        const { data } = await axios.get("api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_ERROR, payload: error.message });
    }

}

const detailsProduct = (productId: string) => async (dispatch:any) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_PENDING, payload: productId });
        const { data } = await axios.get("/api/products/" + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_ERROR, payload: error.message });
    }
}

export { listProducts, detailsProduct }