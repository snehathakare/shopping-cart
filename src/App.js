import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import Products from './components/Products';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="app-grid">
        <header className="app-header">
          <a href="/">Shopping cart</a>
        </header>
        <main>
          <div className="app-content">
          <div className="app-main"><Products products={this.state.products} /></div>
            <div className="app-sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
    );
  }

}

export default App;
