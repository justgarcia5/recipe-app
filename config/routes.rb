Rails.application.routes.draw do
  devise_for :users

  resources :users do
    resources :recipes do
      resources :ingredients do
      end
    end
  end

  resources :recipes
  resources :ingredients


  get '/*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end
