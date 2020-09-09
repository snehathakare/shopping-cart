import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';



class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: []
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

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems: cartItems.filter(x => x._id !== product._id) })
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++
        alreadyInCart = true
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 })
    }
    this.setState({ cartItems });
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
              <Products products={this.state.products} addToCart={this.addToCart} /></div>
            <div className="app-sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart} />
            </div>
          </div>
        </main>
        <footer>All rights reserved.</footer>
      </div>
    );
  }

}

export default App;
