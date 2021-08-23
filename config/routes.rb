Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'top#index'

  get '/login', to: 'login#index'
  get '/signup', to: 'signup#index'
  get '/logbook', to: 'logbook#index'
  get '/loggedout', to: 'loggedout#index'
  get '/logs/:id', to: 'logs#show'
  put '/logs/:id', to: 'logs#update'
  get '/shops/:id', to: 'shops#show'
  put '/shops/:id', to: 'shops#update'
  delete '/shops/:id', to: 'shops#destroy'
  post '/shops', to: 'shops#create'

  get '/auth/:provider/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
end
