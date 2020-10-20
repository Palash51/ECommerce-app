import {Action} from 'redux';

export interface IUser {
    firstName: string;
    lastName: string;
    middleName: string;
    id: string;
  }

export interface IProduct {
    _id: string;
    name: string;
    category: string;
    image: string;
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    countInStock: number;
}




export default interface IAction<T> extends Action<string> {
    type: string;
    payload?: T;
    error?: boolean;
    meta?: any;
}