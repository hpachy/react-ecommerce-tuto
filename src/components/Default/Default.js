import React, { Component } from 'react';
import Title from '../Title/Title';

export default class Default extends Component {
    render() {
        const {location} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <Title name="" title="404"/>
                        <h1>Error</h1>
                        <h2>Page Not Found</h2>
                        <h3>The requested URL <span className="text-danger">{location.pathname}</span> was not found</h3>
                    </div>
                </div>
            </div>
        )
    }
}
