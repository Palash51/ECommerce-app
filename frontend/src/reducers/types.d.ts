import {StateType, ActionType} from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./store').default>;

  export type RootState = StateType<typeof import('./products/productReducers').default>;
  export type RootAction = ActionType<typeof import('./products/actions').default>;

  export type CartRootState = StateType<typeof import('./cart/cartReducer').default>;
  export type CartRootAction = ActionType<typeof import('./cart/action').default>;

  // interface Types {
  //   RootAction: RootAction;
  // }
}