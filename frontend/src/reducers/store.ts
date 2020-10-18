import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';
import { productListReducer } from './products/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
})

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
 
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;