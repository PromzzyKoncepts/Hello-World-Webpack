Rails.application.routes.draw do
  root 'pages#home'
  get 'pages/home'
  get 'api/greetings'

  namespace :api do
    get 'random_greeting', to: 'greetings#random'
  end


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
