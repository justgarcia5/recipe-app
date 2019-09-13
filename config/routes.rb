Rails.application.routes.draw do
  devise_for :users

  resources :users do
    resources :recipes do
      resources :ingredients
    end
  end

  resources :users do
    resources :reviews
  end

  resources :recipes
  resources :ingredients
  resources :reviews

  get '/*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end
