Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root :to => "items_list#index"
  match ':controller(/:action(/:id(.:format)))', :via => :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
