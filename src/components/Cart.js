import React, { Component, Fragment } from 'react'
import './cart.css'
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { showCheckout: false }
    }
    render() {
        const { cartItems } = this.props;
        return (
            <Fragment>
                <div className="cart cart-header">
                    {cartItems.length === 0 ? (
                        <div>Cart is empty</div>
                    )
                        :
                        (<div>You have {cartItems.length} items in the cart</div>

                        )}
                </div>
                <div className="cart">
                    <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div><img src={item.image} alt={item.title} /></div>
                                    <div>{item.title}</div>
                                    <div className="cart-right">
                                        {formatCurrency(item.price)} X {(item.count)} {" "}
                                        <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Fade>
                </div>
                {cartItems.length !== 0 && (
                    <div className="cart-total">
                        Total:{" "}
                        {formatCurrency(cartItems.reduce((total, c) => total + c.price * c.count, 0))}
                        <button onClick={() => { this.setState({ showCheckout: true }) }}>Proceed</button>
                    </div>   
                )}
                {this.state.showCheckout && (
                        <div className="cart-checkout">
                            <Fade right>
                                <form onSubmit={this.createOrder}>
                                    <ul>
                                        <li><label>Email: </label><input type="email"></input></li>
                                        <li><label>Name: </label><input type="text"></input></li>
                                        <li><label>Address: </label><input type="text"></input></li>
                                        <li><button>Checkout</button></li>
                                    </ul>
                                </form>
                            </Fade>
                        </div>
                )}

            </Fragment>
        );
    }
}
