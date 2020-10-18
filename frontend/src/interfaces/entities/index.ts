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
}