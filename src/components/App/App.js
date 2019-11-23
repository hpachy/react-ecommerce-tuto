import React from 'react';
import './App.css';
import Nav from '../Navigation/Navigation'
import About from '../About/About'
import Shop from '../Shop/Shop'
import Landing from '../Landing/Landing';
import ItemDetail from '../ItemDetail/ItemDetail';
import Cart from '../Cart';
import Modal from '../Modal/Modal';
import Default from '../Default/Default';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/details" component={ItemDetail}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
      </div>
  );
}

export default App;
