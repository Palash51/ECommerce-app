import React from 'react';
import styled from 'styled-components';

import data from 'src/data';
import { Link } from 'react-router-dom';

interface IProps {
    match: {
        params: {
            id: string
        }
    }
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


function Product(props:IProps){
    const product = data.products.find(product => product._id === props.match.params.id)
    console.log(product)
    return (
    <Wrapper>
        <BackLinkWrapper>
            <Link to="/">Back to result</Link>
        </BackLinkWrapper>
        <ProductDetailWrapper>
            <ProductImageWrapper>
                <img src={product?.image} alt="product" ></img>
            </ProductImageWrapper>
            <ProductInfoWrapper>
                <ul>
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
                            Status: {product?.price}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li style={{ display:'flex', flexDirection: 'column'}}>
                            <CartButtonWrapper>Add to cart</CartButtonWrapper>
                        </li>
                    </ul>
            </ProductActionWrapper>
        </ProductDetailWrapper>
    </Wrapper>
    );
}

export default Product;