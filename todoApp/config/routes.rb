Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:show, :index, :create, :update, :destroy]
  end

  # resources :static_pages, only: [:root]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
