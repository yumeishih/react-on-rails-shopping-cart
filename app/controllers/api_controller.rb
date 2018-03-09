class ApiController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :get_item, :only => [:updatecart, :deletecart]

  def itemlist
    @item_list = ItemList.all
    render :json => @item_list
  end

  def cart
    @carts = CartItem.all
    render :json => @carts
  end

  def addtocart
    @cart = CartItem.new(item_params)
    if @cart.save
      render :json => @cart
    end
  end

  def updatecart
    if @item.update(item_params)
      render :json => @item
    end
  end

  def deletecart
    @item.destroy
    render :json => { message: "delete OK" }
  end

  private
  def item_params
    params.require(:api).permit(:itemID, :itemImg, :itemName, :describe, :price, :qty)
  end

  def get_item
    @item = CartItem.where( :itemID => params[:id] ).first
  end

end
