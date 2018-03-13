import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { itemProps, itemPropsInit } from '../common/defaultPropTypes.js';

export default class Content extends Component {
  componentDidMount() {
    this.props.fetchCart();
    this.props.fetchItemList();
  }
  render() {
    const { addToCart, updateCart, shoppingCart } = this.props;
    return (
      <div className="content">
        <div className="itemList">{this.props.items.map(item => (<Item
          key={item.itemID}
          item={item}
          shoppingCart={shoppingCart}
          addToCart={addToCart}
          updateCart={updateCart}
        />))}
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(itemProps)),
  shoppingCart: PropTypes.arrayOf(PropTypes.shape(itemProps)).isRequired,
  fetchItemList: PropTypes.func.isRequired,
  fetchCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
};

Content.defaultProps = {
  items: PropTypes.arrayOf(PropTypes.shape(itemPropsInit)),
};
