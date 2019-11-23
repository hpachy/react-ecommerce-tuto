import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import landingPageLogo from '../../logo.svg';
import {ButtonContainer} from '../Button/Button';
import styled from 'styled-components';

export default class Navigation extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/*
          https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk
        */}
        <Link to='/'>
          <img src={landingPageLogo} alt="landing" className="nav-bar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/shop" className="nav-link">Shop</Link> 
          </li>
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"/>
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

//1rem = 16px plus reponsive

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite);
    font-s:1.3rem;
    text-transform: capitalize;
  }
`