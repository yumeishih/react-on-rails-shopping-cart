Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'api/itemlist', to: 'api#itemlist'
  get 'api/cart', to: 'api#cart'
  post 'api/addtocart', to: 'api#addtocart'
  post 'api/updatecart/:id', to: 'api#updatecart'
  get 'api/deletecart/:id', to: 'api#deletecart'
  get 'cart', to: 'cart#index'
  root to: 'items_list#index'
end
