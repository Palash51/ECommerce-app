import { IProduct } from '../../interfaces/entities';

import {
  PRODUCT_LIST_PENDING,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_DETAILS_PENDING,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_ERROR
} from "./actionType";

type ProductListAction =
  | { type: 'PRODUCT_LIST_PENDING' }
  | { type: 'PRODUCT_LIST_SUCCESS'; payload: IProduct[] }
  | { type: 'PRODUCT_LIST_ERROR'; payload: {} };

type ProductDetailAction =
  | { type: 'PRODUCT_DETAILS_PENDING' }
  | { type: 'PRODUCT_DETAILS_SUCCESS'; payload: IProduct }
  | { type: 'PRODUCT_DETAILS_ERROR'; payload: {}};


function productListReducer(state = {products: []}, action:ProductListAction) {
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

function productDetailsReducer(state = {product: {}}, action:ProductDetailAction) {
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