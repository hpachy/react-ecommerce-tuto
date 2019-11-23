import React, { Component } from 'react';
import Product from '../Product/Product';
import Title from '../Title/Title';
import {ProductConsumer} from '../../context';

export default class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                             <ProductConsumer>
                                 {(data)=>{
                                     return data.products.map(product =>{
                                         return <Product product= {product} key={product.id}/>
                                     })
                                 }}
                             </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
