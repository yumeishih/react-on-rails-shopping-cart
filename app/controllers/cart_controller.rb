class CartController < ApplicationController
  def index
    @cart_props =
    {
      shoppingCart: CartItem.all,
      fetchCart: nil,
      deleteCart: nil,
      updateCart: nil,
      isChanged: false
    }
  end
end
