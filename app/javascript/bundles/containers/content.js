import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../components/ItemsList/content';
import { fetchCart, fetchItemList, addToCart, updateCart } from '../actions/index';

const mapStateToProps = (state) => ({
  items: state.ItemsReducer.items,
  shoppingCart: state.ShoppingCartReducer.shoppingCart
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchCart, fetchItemList, addToCart, updateCart
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Content);

