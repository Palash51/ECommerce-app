import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from 'typesafe-actions';
import { History, LocationState } from "history";
import styled from 'styled-components';

import { detailsProduct } from '../../reducers/products/actions'
import { Link } from 'react-router-dom';


interface IProps {
    match: {
        params: {
            id: string
        }
    }
    history: History<LocationState>;
}

const Wrapper = styled.div`

`;

const BackLinkWrapper = styled.div`
    padding: 1rem;
`;

const ProductDetailWrapper = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const ProductImageWrapper = styled.div`
    flex: 1 1 30rem;
    > img{
        max-width: 60rem;
        width: 100%;
    }
`;

const ProductInfoWrapper = styled.div`
    flex: 1 1 30rem;
    > ul{
        list-style-type: none;
        padding: 0;
        > li{
            margin-bottom: 1rem;
        }
    }
    
`;

const ProductActionWrapper = styled.div`
    flex: 1 1 30rem;
    border: 0.1rem #808080 solid;
    border-radius: 0.5rem;
    background-color: #f8f8f8;
    padding: 1rem;
    > ul{
        list-style-type: none;
        padding: 0;
        > li{
            margin-bottom: 1rem;
        }
    }
`;

const CartButtonWrapper = styled.button`
    padding: 1rem;
    border: 0.1rem #808080 solid;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
        border: 0.1rem #404040 solid;
    }
    background-color: #f0c040;

`;


const Product = (props:IProps) => {
    const [qty, setQty] =  useState(1);
    const productDetails =  useSelector((state:RootState) => state.productDetails);
    const { product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        }
    }, [])

    const updateQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQty(Number(e.target.value))
    }

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return (
    
    <Wrapper>
        <BackLinkWrapper>
            <Link to="/">Back to result</Link>
        </BackLinkWrapper>
    {loading ? <div>loading...</div> : 
    error ? <div>{error}</div> : 
    (
        <ProductDetailWrapper>
            <ProductImageWrapper>
                <img src={product?.image} alt="product" ></img>
            </ProductImageWrapper>
            <ProductInfoWrapper>
                <ul data-testid="product-details">
                    <li>
                        <h4>{product?.name}</h4>
                    </li>
                    <li>
                        {product?.rating} Stars ({product?.numReviews} Reviews)
                    </li>
                    <li>
                        Price: <b>${product?.price}</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            {/* {product.description} */}
                        </div>
                    </li>

                </ul>
            </ProductInfoWrapper>
            <ProductActionWrapper>
                    <ul>
                        <li>
                            Price: {product?.price}
                        </li>
                        <li>
                            Status: {product?.countInStock > 0 ? "In Stock" : "Out of stock"}
                        </li>
                        <li>
                            {/* TODO: Need to remove downlevelIteration */}
                            Quantity: <select value={qty} onChange={(e) => updateQuantity(e)} >
                            {[...Array(product?.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                            ))}
                            </select>
                        </li>
                        
                        <li style={{ display:'flex', flexDirection: 'column'}}>
                        {product?.countInStock > 0 &&  <CartButtonWrapper onClick={handleAddToCart}>Add to cart</CartButtonWrapper>}
                        </li>
                        
                    </ul>
            </ProductActionWrapper>
        </ProductDetailWrapper>
        )}
    </Wrapper>
    );
}

export default Product;