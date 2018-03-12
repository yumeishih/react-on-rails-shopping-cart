require 'rails_helper'

RSpec.describe ApiController, :type => :controller do
  item_params = {
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000,
    qty:2
  }
  item_params_update = {
    itemID: 'fakeitem',
    itemImg: './src/imgs/items/fakeitem.jpg',
    itemName: 'fakeitem',
    describe: 'fakeitem',
    price: 10000,
    qty:10
  }
  describe "True" do
    it "should be true" do
      true.should be_truthy
    end
  end
  it "itemlist" do
    get :itemlist
    response.should have_http_status 200
  end
  it "cart" do
    get :itemlist
    response.should have_http_status 200
  end

  it "data create update delete" do
    post :addtocart, params: { api: item_params}
    response.should have_http_status 200

    post :updatecart, params: {id: 'fakeitem', api: item_params_update}
    response.should have_http_status 200

    get :deletecart, params: {id: 'fakeitem'}
    response.should have_http_status 200
  end
end