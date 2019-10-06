Rails.application.routes.draw do
  devise_for :users

  resources :posts do
    resources :comments
  end

  # resources :posts
  resources :recipes
  resources :comments

  get '/*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end
