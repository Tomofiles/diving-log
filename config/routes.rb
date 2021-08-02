Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'top#index'

  get '/auth/:provider/callback', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'
end
