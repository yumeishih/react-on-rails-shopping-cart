class ApiController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :get_item, :only => [:updatecart, :deletecart]

  def itemlist
    @item_list = ItemList.all
    ItemList.add_new_label(@item_list)
    render :json => @item_list
  end

  def cart
    @carts = CartItem.all
    render :json => @carts
  end

  def addtocart
    if(params[:api] == nil)
      render :json => { error: "No params" }, :status => :no_content
    else
      @cart = CartItem.new(item_params)
      if @cart.save
        render :json => @cart
      else
        render :json => {error: @cart.errors.full_messages }, :status => :bad_request
      end
    end
  end

  def updatecart
    if @item ==nil
        render json: { error: "not dound item" }, status: :not_found
    else
      if @item.update(item_params)
        render :json => @item
      else
        render json: @item.errors, status: :unprocessable_entity
      end
    end
  end

  def deletecart
    if @item ==nil
      render json: { error: "not dound item" }, status: :not_found
    else
      @item.destroy
      render :json => { message: "delete OK" }
    end
  end

  private
  def item_params
    params.require(:api).permit(:itemID, :itemImg, :itemName, :describe, :price, :qty)
  end

  def get_item
    @item = CartItem.where( :itemID => params[:id] ).first

  end

end
