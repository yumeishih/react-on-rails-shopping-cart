class ApiController < ApplicationController
  def itemlist
    @item_list = ItemList.all
    render :json => @item_list
  end

  def cart
    @cart = CartItem.all
    render :json => @cart
  end

  def addtocart
  end

  def updatecart
  end

  def deletecart
  end


end
