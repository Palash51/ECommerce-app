import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import data from '../../data'
import styled from 'styled-components';
import { IProduct } from '../../interfaces/entities';

const ProductWrapper = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

function Home(){

    const [products, setProducts] =  useState<IProduct[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data)
        }
        fetchData();
        return () => { 
        }
    }, [])

    return (
        <ProductWrapper>
                {
                    products.map(product => 
                      <li style={{ listStyleType: "none"}} key={product._id}>
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