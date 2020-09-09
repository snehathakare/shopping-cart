import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import Products from './components/Products';
import Filter from './components/Filter';


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  sortProducts = (event) => {
    // console.log(event.target.value);
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
      .slice()
      .sort()     
   }));
  };

  filterProducts = (event) => {
    //console.log(event.target.value);
    if (event.target.value === "") { //when no filter option is selected
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
        //to make sure that the selected size exists in the product array
      });
    }

  }

  render() {
    return (
      <div className="app-grid">
        <header className="app-header">
          <a href="/">Shopping cart</a>
        </header>
        <main>
          <div className="app-content">
            <div className="app-main">
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}></Filter>
              <Products products={this.state.products} /></div>
            <div className="app-sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
    );
  }

}

export default App;
