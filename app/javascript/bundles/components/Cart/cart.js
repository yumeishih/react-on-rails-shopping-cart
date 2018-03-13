import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { itemProps } from '../common/defaultPropTypes.js';
import ItemForCart from './itemForCart';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
    props.fetchCart();
  }

  componentWillReceiveProps(nextProps) {
    const total = this.calculateTotal(nextProps.shoppingCart);
    this.setState({ total });
    if (nextProps.isChanged) {
      nextProps.fetchCart();
    }
  }

  calculateTotal(cart) {
    return cart.map((item) => { return item.qty * item.price; }).reduce((acc, cet) => acc + cet, 0);
  }

  render() {
    const { deleteCart, updateCart } = this.props;
    return (
      <div className="cart">
        <div className="itemListforCart">
          {this.props.shoppingCart.map(item => (<ItemForCart
            key={item.itemID}
            item={item}
            deleteCart={deleteCart}
            updateCart={updateCart}
          />))}
        </div>
        <h2>Total: {this.state.total}</h2>
      </div>
    );
  }
}

Cart.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.shape(itemProps)).isRequired,
  fetchCart: PropTypes.func.isRequired,
  deleteCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
  isChanged: PropTypes.bool.isRequired
};
