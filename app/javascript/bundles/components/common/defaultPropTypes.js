import PropTypes from 'prop-types';

export const itemProps = {
  itemID: PropTypes.string,
  itemImg: PropTypes.string,
  itemName: PropTypes.string,
  describe: PropTypes.string,
  price: PropTypes.number,
  qty: PropTypes.number,
  map: PropTypes.func
};

export const itemPropsInit = {
  itemID: '',
  itemImg: '',
  itemName: '',
  describe: '',
  price: 0,
  qty: 0
};
