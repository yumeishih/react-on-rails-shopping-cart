import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findIndex } from 'lodash';
import Counter from '../common/counter';
import { itemProps, itemPropsInit } from '../common/defaultPropTypes.js';

export default class Item extends Component {
  constructor() {
    super();
    this.state = {
      qty: 1
    };
    this.addToCartClick = this.addToCartClick.bind(this);
    this.updateQty = this.updateQty.bind(this);
  }
  updateQty(newQty) {
    this.setState({ qty: newQty });
  }
  addToCartClick() {
    const { item, shoppingCart } = this.props;
    const index = findIndex(shoppingCart, { itemID: item.itemID });
    if (index === -1) {
      this.props.addToCart(item, this.state.qty);
    } else {
      this.props.updateCart(item, this.state.qty, index);
    }
  }

  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <img src={`../assets/${item.itemImg}`} alt={item.itemID} />
        { item.isNew && <span className="new-label">New!</span> }
        <div className="item-info">
          <h4>{item.itemName}</h4>
          <p>{item.describe}</p>
          <p>Price: {item.price}</p>
          <Counter
            item={item}
            updateQty={this.updateQty}
          />
          <div>
            <button className="btn btn-md btn-success addToCart" onClick={this.addToCartClick}><span className="fa fa-hand-peace-o" /> Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape(itemProps),
  shoppingCart: PropTypes.arrayOf(PropTypes.shape(itemProps)).isRequired,
  addToCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired,
};

Item.defaultProps = {
  item: PropTypes.shape(itemPropsInit),
};
