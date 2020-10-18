
import {
  PRODUCT_LIST_PENDING,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_DETAILS_PENDING,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_ERROR
} from "./actionType";

function productListReducer(state = {products: []}, action:any) {
    switch (action.type) {
        case PRODUCT_LIST_PENDING:
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function productDetailsReducer(state = {product: {}}, action:any) {
    switch (action.type) {
        case PRODUCT_DETAILS_PENDING:
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_ERROR:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export { productListReducer, productDetailsReducer }