import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';
import Cookie from 'js-cookie';

import { productListReducer, productDetailsReducer } from './products/productReducers';
import { cartReducer } from './cart/cartReducer';

// interface IInitialState {
//     productList: any,
//     productDetails: any,
//     cart: any
//   }

const cartItems = Cookie.getJSON('cartItems') || [];

const initialState:any = { cart: {cartItems }};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
 
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;