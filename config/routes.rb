Rails.application.routes.draw do
  devise_for :users

  resources :users do
    resources :recipes do
      resources :ingredients
    end
  end

  resources :users do
    resources :posts do
      resources :comments
    end
  end

  resources :posts
  resources :recipes

  get '/*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end
