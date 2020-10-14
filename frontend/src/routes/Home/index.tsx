import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data'
import styled from 'styled-components';

const ProductWrapper = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

function Home(){
    return (
        <ProductWrapper>
                {
                    data.products.map(product => 
                      <li style={{ listStyleType: "none"}}>
                        <div className="product">
                            <Link to={`/product/${product._id}`}>
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