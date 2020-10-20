import axios from 'axios';
import { AnyAction } from "redux";
import Cookie from 'js-cookie';

import { CART_ADD_ITEM, CART_ADD_ITEM_ERROR, CART_REMOVE_ITEM } from './actionType';

export interface Dispatch<A> {
    <T extends A>(action: T): T
  }


export const addToCart = (productId: string, qty: number) => async (dispatch:Dispatch<AnyAction>, getState:any) => {
    
    try {
        const { data } = await axios.post("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
              product: data._id,
              name: data.name,
              image: data.image,
              price: data.price,
              countInStock: data.countInStock,
              qty: qty
            }
          });
        const { cart: { cartItems }} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        dispatch({ type: CART_ADD_ITEM_ERROR, payload: error.message });
    }
}

export const removeFromCart = (productId: string) => async (dispatch: Dispatch<AnyAction>, getState:any) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId })
  const { cart: { cartItems }} = getState();
  Cookie.set("cartItems", JSON.stringify(cartItems));
}
