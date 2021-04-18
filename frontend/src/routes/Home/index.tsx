import React, { useEffect, FC } from 'react';
import { RootState } from 'typesafe-actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { listProducts } from '../../reducers/products/actions';
import { IProduct } from '../../interfaces/entities';

const ProductWrapper = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Home: FC = () => {
    const productList = useSelector((state: RootState) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        // return () => { 
        // }
    }, [])

    return (
        loading ? <div>loading...</div> :
            error ? <div>{error}</div> :
                <ProductWrapper>
                    {
                        products.map((product: IProduct) =>
                            <li style={{ listStyleType: "none" }} key={product._id}>
                                <div className="product">
                                    <Link to={`/product/${product._id}`} href="!#">
                                        <img className="product-image" src={product.image} alt="products" />
                                    </Link>
                                    <div className="product-name">
                                        <Link to={`/product/${product._id}`}>{product.name}</Link>
                                    </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">{product.price}</div>
                                    <div className="product-rating">{product.rating} stars ({product.numReviews} Reviews)</div>
                                </div>
                            </li>
                        )}
                </ProductWrapper>
    );
}

export default Home;