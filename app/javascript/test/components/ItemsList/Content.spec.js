import React from 'react';
import Content from '../../../bundles/components/ItemsList/content';

describe('/components/ItemsList/Content', () => {
  const fakefetchItemList = spy();
  const fakefetchCart = spy();
  const addToCart = ()=>{};
  const updateCart = ()=>{};
  const fakeitems = [];
  const fakeshoppingCart =[]
  const wrapper = shallow(<Content
    items={fakeitems}
    shoppingCart ={fakeshoppingCart}
    fetchCart ={fakefetchCart}
    fetchItemList={fakefetchItemList}
    addToCart={addToCart}
    updateCart={updateCart}
  />);

  it('type of Content', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('has a class name of "content"', () => {
    expect(wrapper.find('.content')).to.exist;
  });

  it('has children has class name of "itemList"', () => {
    expect(wrapper.props().children.props.className).to.equal('itemList');
  });

  it('fetchItemList has been called', () => {
    expect(fakefetchItemList.called).to.equal(true);
  });

  it('fetchCart has been called', () => {
    expect(fakefetchCart.called).to.equal(true);
  });
});
