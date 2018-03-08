import { connect } from 'react-redux';
import Content from '../components/ItemsList/content';
import { fetchItemList, addToCart, updateCart } from '../actions/index';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  items: state.ItemsReducer.items,
  shoppingCart: state.ShoppingCartReducer.shoppingCart
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ fetchItemList, addToCart, updateCart }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Content);

