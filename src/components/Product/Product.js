import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    // fetchItem = async () => {
    //     const data = await fetch("http://192.168.1.45:8000/products.json").catch(function(error) {
    //         console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    //     });
    //     // const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');

    //     console.log(data.json());
    // }

    render() {
        const {id, title, img, price, inCart} = this.props.product
        return (
            <ProductConsumer>
                {(value) => (
                <ProductWapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to='/details'>
                                <img src={img} alt="product" className="card-img-top"/>
                            </Link>
                            <button 
                                className="cart-btn" 
                                disabled={inCart? true : false} 
                                onClick={()=> {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                            >
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>{" "}In inCart</p>
                                ) : (
                                <i className="fas fa-cart-plus"/>
                                )}
                            </button>
                        </div>
                        {/* carte footer */}
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0"></p>
                            {title}
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">€</span>
                                {price}
                            </h5>
                        </div>
                    </div>
                </ProductWapper>
            )}
            </ProductConsumer>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number.isRequired,
        img:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        inCart:PropTypes.bool.isRequired
    }).isRequired
}

const ProductWapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04 rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgb(247, 247, 247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border:none;
    color: var(--mainWhite);
    font-size 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0, 0);
}
.cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}
`