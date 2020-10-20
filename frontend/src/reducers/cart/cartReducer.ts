import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './actionType';

function cartReducer(state = { cartItems: [] }, action: any) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const product: any = state.cartItems.find((x: any) => x.product === item.product);
            if (product) {
                return { cartItems: state.cartItems.map((x: any) => x.product === product.product ? item : x) }
            }
            return { cartItems: [...state.cartItems, item] };

        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter((x:any) => x.product !== action.payload)}

        default:
            return state;
    }
}  

export { cartReducer }