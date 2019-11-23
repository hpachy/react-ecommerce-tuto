import React, { Component } from 'react';
import {ProductConsumer} from '../../context'; 
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button/Button'
 
export default class ItemDetail extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} =  value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>                                
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                            {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Pade by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price : <span>€</span> {price}
                                        </strong>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            Some info about product : 
                                        </p>
                                        <p className="text-muted">
                                            {info}
                                        </p>
                                        {/* button */}
                                        <div>
                                            <Link to='/shop'>
                                                <ButtonContainer>
                                                    Back to Shop
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer 
                                                cart 
                                                disable={inCart ? true:false} onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                                {inCart? "In cart": "Add to cart"}
                                            </ButtonContainer>
                                        </div>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}


