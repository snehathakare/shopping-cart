import React, { Component } from 'react'
import './products.css'
import formatCurrency from '../util'
import Fade from 'react-reveal/Fade';

export default class Products extends Component {
  render() {
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products-list">
            {this.props.products.map(product => (
              <li key={product._id}>
                <div className="product">
                  <a href={"#" + product._id}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                  </a>
                  
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button onClick={() => this.props.addToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    )
  }
}
