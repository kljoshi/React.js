import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import products from './vschoolProducts';
import Product from './Product';

class App extends Component {
  render() {
    const productsComponent  = products.map(function(item){
      return(
        <Product p={item}/>
      )
    })

    return (
      <div className="App">
        {productsComponent }
      </div>
    );
  }
}

export default App;
