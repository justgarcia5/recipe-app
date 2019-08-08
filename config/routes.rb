Rails.application.routes.draw do
  resources :recipes
  devise_for :users

  resources :users do
    resources :recipes
  end

  get '/*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end
