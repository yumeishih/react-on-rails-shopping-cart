class ItemsListController < ApplicationController
  def index
    @content_props =
    {
      items: ItemList.all,
      shoppingCart: [],
      fetchItemList: nil,
      addToCart: nil,
      updateCart: nil
    }
  end
end
