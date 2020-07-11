import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal'

class App extends Component {
  render(){
    return (
     <React.Fragment>
       <Navbar />
       <Switch>
         <Route exact path = "/" component = {ProductList} />
         <Route exact path = "/details" component = {Details} />
         <Route exact path = "/cart" component = {Cart} />
         <Route exact component = {Default} />
       </Switch>
       <Modal />
     </React.Fragment>
    );
  }
}

export default App;