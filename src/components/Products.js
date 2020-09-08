import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div>
        <ul className="products-list">
          {this.props.products.map(product => (
            <li key={product._id}>
              <div>
                <a href={"#" + product._id}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </a>
              </div>
              <div className="product-price">
                <div>{product.price}</div>
                <button>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
