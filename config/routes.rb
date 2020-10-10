Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  name :api do
    resources :cuisines do
      resources :dish_types 
    end
    resources :dish_types do
      resources :recipes
    end
    resources :recipes do
      resources :ingredients
    end
    resources :recipes do
      resources :special_equipments
    end
  end
end
